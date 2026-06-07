/**
 * Notification System for Haqqdar
 * Manages case deadlines, alerts, and milestone tracking
 */

const NotificationSystem = {
    STORAGE_KEY: 'haqqdar_notifications',
    CHECK_INTERVAL: 60000, // Check every minute

    init() {
        this.loadNotifications();
        this.startDeadlineMonitor();
        this.renderNotificationBell();
        console.log('✓ Notification System initialized');
    },

    // Create notification
    createNotification(caseId, title, message, type = 'info', dueDate = null) {
        const notifications = this.getNotifications();
        const notification = {
            id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            caseId,
            title,
            message,
            type, // 'info', 'warning', 'urgent', 'success'
            dueDate,
            createdAt: new Date().toISOString(),
            isRead: false,
            actionUrl: null
        };
        notifications.push(notification);
        this.saveNotifications(notifications);
        this.showToast(title, message, type);
        return notification;
    },

    // Deadline-based notifications
    checkDeadlines() {
        const cases = getActiveCases ? getActiveCases() : [];
        const now = new Date();
        
        cases.forEach(c => {
            if (!c.timeline) return;
            
            c.timeline.forEach((step, idx) => {
                if (c.completedSteps && c.completedSteps.includes(idx)) return;
                
                const stepDate = new Date(c.dateAdded);
                stepDate.setDate(stepDate.getDate() + step.days);
                const daysUntil = Math.ceil((stepDate - now) / (1000 * 60 * 60 * 24));
                
                // Notify 3 days before deadline
                if (daysUntil === 3 && !this.notificationExists(c.id, `deadline-${idx}`)) {
                    this.createNotification(
                        c.id,
                        `⏰ Deadline Approaching: ${step.event}`,
                        `You have ${daysUntil} days left to ${step.event.toLowerCase()}`,
                        'warning',
                        stepDate
                    );
                }
                
                // Notify on deadline day
                if (daysUntil === 0) {
                    this.createNotification(
                        c.id,
                        `🔴 ACTION REQUIRED: ${step.event}`,
                        `Today is the deadline for ${step.event.toLowerCase()}!`,
                        'urgent',
                        stepDate
                    );
                }
            });
        });
    },

    // Toast notification
    showToast(title, message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `notification-toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${this.getIcon(type)}</span>
                <div class="toast-text">
                    <h4>${title}</h4>
                    <p>${message}</p>
                </div>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">✕</button>
            </div>
        `;
        
        const container = document.querySelector('.notifications-container') || 
                         document.body.appendChild(document.createElement('div'));
        container.className = 'notifications-container';
        container.appendChild(toast);
        
        setTimeout(() => toast.remove(), 5000);
    },

    // Notification bell UI
    renderNotificationBell() {
        const navbar = document.querySelector('.nav-actions');
        if (!navbar || document.querySelector('#notification-bell')) return;

        const bellHTML = `
            <div class="notification-bell-wrapper" id="notification-bell">
                <button class="notification-bell-btn" onclick="NotificationSystem.togglePanel()">
                    <span class="bell-icon">🔔</span>
                    <span class="notification-badge" id="notification-count">0</span>
                </button>
                <div class="notification-panel" id="notification-panel" style="display: none;">
                    <div class="panel-header">
                        <h3>Notifications</h3>
                        <button onclick="NotificationSystem.clearAll()">Clear All</button>
                    </div>
                    <div class="panel-content" id="notifications-list">
                        <!-- Notifications rendered here -->
                    </div>
                </div>
            </div>
        `;

        navbar.insertAdjacentHTML('beforeend', bellHTML);
        this.updateBadge();
    },

    // Toggle notification panel
    togglePanel() {
        const panel = document.getElementById('notification-panel');
        if (panel) {
            panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
            this.renderNotificationList();
        }
    },

    // Render notification list
    renderNotificationList() {
        const list = document.getElementById('notifications-list');
        if (!list) return;

        const notifications = this.getNotifications();
        const unread = notifications.filter(n => !n.isRead);

        if (unread.length === 0) {
            list.innerHTML = '<p class="no-notifications">No new notifications</p>';
            return;
        }

        list.innerHTML = unread.map(n => `
            <div class="notification-item notification-${n.type}" onclick="NotificationSystem.markAsRead('${n.id}')">
                <div class="notif-icon">${this.getIcon(n.type)}</div>
                <div class="notif-content">
                    <h5>${n.title}</h5>
                    <p>${n.message}</p>
                    <span class="notif-time">${this.timeAgo(n.createdAt)}</span>
                </div>
                <button class="notif-close" onclick="event.stopPropagation(); NotificationSystem.dismiss('${n.id}')">✕</button>
            </div>
        `).join('');
    },

    // Mark as read
    markAsRead(notificationId) {
        const notifications = this.getNotifications();
        const notif = notifications.find(n => n.id === notificationId);
        if (notif) {
            notif.isRead = true;
            this.saveNotifications(notifications);
            this.updateBadge();
            this.renderNotificationList();
        }
    },

    // Dismiss notification
    dismiss(notificationId) {
        let notifications = this.getNotifications();
        notifications = notifications.filter(n => n.id !== notificationId);
        this.saveNotifications(notifications);
        this.updateBadge();
        this.renderNotificationList();
    },

    // Clear all notifications
    clearAll() {
        this.saveNotifications([]);
        this.updateBadge();
        this.renderNotificationList();
    },

    // Update badge count
    updateBadge() {
        const count = this.getNotifications().filter(n => !n.isRead).length;
        const badge = document.getElementById('notification-count');
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    },

    // Check if notification already exists
    notificationExists(caseId, key) {
        const notifications = this.getNotifications();
        return notifications.some(n => n.caseId === caseId && n.id.includes(key));
    },

    // Get icon for type
    getIcon(type) {
        const icons = {
            'info': 'ℹ️',
            'warning': '⚠️',
            'urgent': '🔴',
            'success': '✅',
            'deadline': '⏰'
        };
        return icons[type] || 'ℹ️';
    },

    // Time ago formatter
    timeAgo(isoString) {
        const seconds = Math.floor((new Date() - new Date(isoString)) / 1000);
        if (seconds < 60) return 'just now';
        if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
        if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
        return Math.floor(seconds / 86400) + 'd ago';
    },

    // Start deadline monitoring
    startDeadlineMonitor() {
        this.checkDeadlines();
        setInterval(() => this.checkDeadlines(), this.CHECK_INTERVAL);
    },

    // Storage methods
    getNotifications() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    saveNotifications(notifications) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notifications));
        } catch (e) {
            console.error('Failed to save notifications:', e);
        }
    },

    loadNotifications() {
        this.getNotifications();
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => NotificationSystem.init());
} else {
    NotificationSystem.init();
}
