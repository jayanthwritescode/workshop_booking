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
