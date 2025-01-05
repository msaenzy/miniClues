// script.js
document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
    const uploadStatus = document.getElementById('uploadStatus');
    const finalMessage = document.getElementById('finalMessage');
    const nextChallengeButton = document.getElementById('nextChallengeButton');
    
    if (fileInput.files.length === 0) {
        uploadStatus.textContent = "Please select a file!";
        return;
    }

    // Show progress bar
    progressContainer.style.display = 'block';
    uploadStatus.textContent = '';

    // Simulate the "upload" process
    let progress = 0;
    const interval = setInterval(function() {
        progress += 10;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            statusText.textContent = 'Hiciste un excelente trabajo!';
            uploadStatus.textContent = 'EL PREMIO AHORA SI!';
            setTimeout(function() {
                // Display the OK message and the next challenge button
                finalMessage.style.display = 'block';
                nextChallengeButton.style.display = 'inline-block';
            }, 1000);
        }
    }, 500);
});

function goToNextChallenge() {

    window.location.href = 'index4.html';
    // Aquí puedes agregar la lógica para redirigir o mostrar el siguiente desafío
}
juuuuuuuuuuuuuuuuuuuuuh00000000000000h