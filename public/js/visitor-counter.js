// Visitor Counter Function
async function updateVisitorCount() {
    const counterElement = document.getElementById('visitor-count');
    
    // Replace with your actual API Gateway URL
    const API_URL = '"https://598vzrf9z9.execute-api.us-east-1.amazonaws.com/prod/visitor"';  // e.g., 'https://abc123.execute-api.us-east-1.amazonaws.com/prod/visitor'
    
    try {
        // Call the API
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update the counter display
        counterElement.textContent = data.count.toLocaleString();
        counterElement.classList.remove('bg-light', 'text-dark');
        counterElement.classList.add('bg-success');
        
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        counterElement.textContent = 'Error loading count';
        counterElement.classList.remove('bg-light', 'text-dark');
        counterElement.classList.add('bg-danger');
    }
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);
