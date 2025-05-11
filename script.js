let clickCount = 0;
        
function addClick() {
    clickCount++;
    updateCounter();
    
    // Visual feedback
    if(clickCount % 5 === 0) {
        flashBackground();
    }
    
    // Haptic feedback simulation
    if(navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function resetCounter() {
    clickCount = 0;
    updateCounter();
}

function updateCounter() {
    const counter = document.getElementById('clickCounter');
    counter.textContent = `${clickCount} dopamine hit${clickCount !== 1 ? 's' : ''}`;
    
    // Progressive color change
    const intensity = Math.min(clickCount * 10, 100);
    counter.style.color = `hsl(340, 100%, ${70 - intensity/2}%)`;
}

function flashBackground() {
    document.body.style.backgroundColor = '#1A1A2E';
    setTimeout(() => {
        document.body.style.backgroundColor = 'var(--dark-bg)';
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add animation to steps
    document.querySelectorAll('.loop-step').forEach((step, i) => {
        step.style.animation = `fadeIn 0.5s ease-out ${i * 0.2}s forwards`;
        step.style.opacity = '0';
    });
});

// Add keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);