function convertTextToSpeech() {
    const text = document.getElementById('text-input').value;
    if (!text) {
        alert('Vui lòng nhập văn bản để chuyển đổi.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN'; // Đặt ngôn ngữ là tiếng Việt

    speechSynthesis.speak(utterance);

    utterance.onend = function() {
        console.log('Chuyển đổi văn bản thành âm thanh hoàn tất.');
    };

    utterance.onerror = function(event) {
        console.error('Đã xảy ra lỗi khi chuyển đổi văn bản thành âm thanh:', event.error);
    };
}
