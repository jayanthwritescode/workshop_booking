// Simple React Button Component
const { Button } = React;

function ReactButton({ children, variant = 'primary', onClick, disabled = false }) {
    const baseClasses = 'btn';
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline-primary',
        danger: 'btn-danger'
    };
    
    return (
        React.createElement('button', {
            className: `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`,
            onClick: onClick,
            disabled: disabled
        }, children)
    );
}

// Simple React Card Component
function ReactCard({ title, children, footer }) {
    return (
        React.createElement('div', { className: 'card' },
            React.createElement('div', { className: 'card-body' },
                title && React.createElement('h5', { className: 'card-title' }, title),
                children
            ),
            footer && React.createElement('div', { className: 'card-footer' }, footer)
        )
    );
}

// Simple React Badge Component
function ReactBadge({ text, variant = 'primary' }) {
    const variantClasses = {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        success: 'badge-success',
        danger: 'badge-danger',
        warning: 'badge-warning',
        info: 'badge-info'
    };
    
    return (
        React.createElement('span', {
            className: `badge ${variantClasses[variant] || variantClasses.primary}`
        }, text)
    );
}

// React Workshop Card Component
function ReactWorkshopCard({ workshop, detailsUrl }) {
    return (
        React.createElement('div', { className: 'card' },
            React.createElement('div', { className: 'card-body' },
                React.createElement('h5', { className: 'card-title' }, workshop.name),
                React.createElement('p', { className: 'card-text text-muted' },
                    React.createElement('span', { className: 'material-icons align-middle mr-1', style: { fontSize: '16px' } }, 'schedule'),
                    workshop.duration + ' day' + (workshop.duration !== 1 ? 's' : '')
                ),
                React.createElement('a', { 
                    href: detailsUrl, 
                    className: 'btn btn-outline-primary btn-sm' 
                }, 'View Details')
            )
        )
    );
}
