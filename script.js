document.getElementById('download-cv').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'assets/Tamar_Kraus_CV.pdf';
    link.download = 'Tamar_Kraus_CV.pdf';
    link.click();
});


document.getElementById('preview-cv').addEventListener('click', function () {
    window.open('assets/Tamar_Kraus_CV.pdf', 'CV Preview', 'width=1400,height=600');
});
