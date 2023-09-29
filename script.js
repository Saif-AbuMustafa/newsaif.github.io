
function openServiceDetails(serviceName) {
    let serviceURL = ''; // Specify the correct file path for each service detail page.
    switch (serviceName) {
        case 'Wealth Management':
            serviceURL = 'wealth-management-details.html';
            break;
        case 'Real Estate Investment':
            serviceURL = 'real-estate-investment-details.html';
            break;
        case 'Corporate Financing':
            serviceURL = 'corporate-financing-details.html';
            break;
        default:
            serviceURL = 'default-details.html'; // Provide a default page in case of errors.
            break;
    }
    window.open(serviceURL, '_blank', 'width=800,height=600');
}


// this file is for the going to the other html pages 




