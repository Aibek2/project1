const greetingsForOthers = [
    "8 наурыз мерекеңмен! Осы шуақты көктем мерекесі саған шынайы бақыт, шексіз қуаныш пен сарқылмас күш-қуат әкелсін! Жаның әрдайым махаббат пен мейірімге толып, әр күнің қуаныш пен жақсылыққа толы болсын! 😊🌸💖",
    "8 наурыз мерекеңмен! Өмірің гүлдей жайнап, жүзіндегі жылы күлкің ешқашан солмасын! Шаттық пен сәттілік әрдайым серігің болып, алдыңнан тек жақсылықтар ғана кездесіп отырсын! 🌷✨💕",
    "8 наурыз мерекеңмен! Саған ашық аспан, нұрлы күн, бақытты өмір тілеймін! Жүрегің тек қуаныш пен махаббатқа толып, барлық армандарың орындала берсін! Көктемнің әсемдігі сенің жаныңның нәзіктігімен астасып, өміріңді одан әрі көркейте берсін! ☀️💐💖",
    "8 наурыз мерекеңмен! Көктемнің алғашқы лебі саған жаңа мүмкіндіктер, жарқын сәттер мен қуанышты күндер алып келсін! Өмір жолың әрдайым ашық болып, жүрегің тек жылылық пен махаббатқа толсын! Барша жақсылық өзіңді тауып, бақыт құшағында өмір сүре бер! 😍🌷🌞",
    "8 наурыз мерекеңмен! Бұл ерекше күн саған жаңа шабыт, шынайы махаббат, бақыт пен сәттілік әкелсін! Жаның жайсан, көңілің көтеріңкі, армандарың орындалған ғажайып күндер көп болсын! Көктемнің әрбір шуағы сенің жүрегіңді нұрға бөлесін! 💖🌹🎉",
    "8 наурыз мерекеңмен! Сенің жүрегің мейірім мен махаббатқа, өмірің қуаныш пен шаттыққа толы болсын! Сұлулығың мен нәзіктігің мәңгілік сақталып, айналаңа тек жылулық пен жарық сыйлай бер! Әр күнің шаттық пен қуанышқа толып, бақыт сенің тұрақты серігіңе айналсын! 💕🌞🌺",
    "8 наурыз мерекеңмен! Бұл шуақты мереке сенің өміріңе тек жақсылық, жарқын эмоциялар мен тәтті сәттер алып келсін! Жаның тыныштықта, көңілің шаттықта болып, әрбір күнің бақытпен өрілсін! Барлық армандарың орындалып, өмірің гүлдей жайнай берсін! 😊💖🌿"
];

document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const greetingDiv = document.getElementById('greeting');
    const photoContainer = document.querySelector('.photo-container');
    const userPhoto = document.getElementById('userPhoto');
    const greetingText = document.getElementById('greetingText');
    const notification = document.getElementById('notification');

    // Плавное исчезновение текущего фото
    userPhoto.classList.remove('fade-in');
    userPhoto.style.opacity = 0;

    setTimeout(() => {
        // Если имени нет в списке
        greetingText.textContent = `${name}, ${greetingsForOthers[Math.floor(Math.random() * greetingsForOthers.length)]}`;
        photoContainer.style.display = 'none'; // Скрываем контейнер

        // Плавное появление нового фото
        setTimeout(() => {
            userPhoto.classList.add('fade-in');
            userPhoto.style.opacity = 1;
        }, 10);
    }, 500); // Задержка для плавного перехода

    greetingDiv.classList.remove('hidden');
    notification.classList.remove('hidden');

    // Скрываем уведомление через 5 секунд
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 4000);
});