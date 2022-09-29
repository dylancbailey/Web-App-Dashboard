const alertBanner = document.getElementById('alert');

//notification
const notification = document.getElementById('notifications');
notification.addEventListener('click', e => {
    notification.classList.remove('notifications');
    alertBanner.innerHTML = 
    `<div class="alert-banner">
    <p>1. Finishing writing CSS classes.</p>
    <p class="alert-banner-close">x</p>
    </div>
    <div class="alert-banner smoosh">
    <p>2. Practice JavaScript loops.</p>
    `;
});

//create the html for banner
alertBanner.innerHTML = 
`<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>2</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`;

//click x to close
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        
        for (let i = 0; i < alertBanner.length; i++) {
            console.log('yo');
        }

        alertBanner.style.display = 'none';
        notification.classList.remove('notifications');
    }
});

//line graph
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficDataHourly = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        data: [100, 200, 300, 100, 500, 230, 400, 100, 300, 123, 345, 200],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};

let trafficDataDaily = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
        data: [400, 200, 560, 320, 110, 245, 500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};

let trafficDataWeekly = {
    labels: ['1-7', '8-14', '15-21', '22-30'],
    datasets: [{
        data: [1000, 3254, 2234, 4324],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0,
    },
    scales: {
        y: {
            beginAtZero: true,
        }
    },
    plugins: {
        legend: {
            display: false
        }
    },
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions,
});

const updateChart = (target) => {
    if (target.textContent.includes('Hourly')) {
        trafficChart.data = trafficDataHourly;
        trafficChart.update();
    } else if (target.textContent.includes('Daily')) {
        trafficChart.data = trafficDataDaily;
        trafficChart.update();
    } else if (target.textContent.includes('Weekly')) {
        trafficChart.data = trafficDataWeekly;
        trafficChart.update();
    } else {
        trafficChart.data = trafficData;
        trafficChart.update();
    }
}

const trafficUL = document.querySelector('.traffic-nav');
trafficUL.addEventListener('click', e => {
    const target = e.target;
    const li = trafficUL.getElementsByTagName('li');

    //chart change
    

    if (!target.classList.contains('active') && 
         target.classList.contains('traffic-nav-link')) {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove('active');
        }
        target.classList.add('active');
        updateChart(target);
    }

    if (trafficUL.classList.contains('active')) {
        trafficUL.classList.remove('active');
        updateChart(target);
    }
});

//bar graph
const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true,
        } 
    },
    plugins: {
        legend: {
            display: false,
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    otions: dailyOptions,
});

//doughnut graph
const mobileCanvas = document.getElementById('doughnut-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions,
});

//messaging
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', (e) => {
    e.preventDefault();
    
    //ensure fields are filled out
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields.');
    } else if (user.value === "") {
        alert('Please fill out user field.');
    } else if (message.value === '') {
        alert('Please fill out message field.');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        user.value = '';
        message.value = '';
    }
});

//autocomplete
const searchNames = ['Victoria', 'Dale', 'Dawn', 'Dan'];
const sendBtn = document.getElementById('send');

function autoCompleteMatch(input) {
    if (input === '') {
        return [];
    }
    const reg = new RegExp(input);
    return searchNames.filter(function(terms) {
        if (terms.match(reg)) {
            return terms;
        }
    });
}

function showResults(val) {
    const res = document.getElementById('result');
    const userField = document.getElementById('userField');
    res.innerHTML = '';
    let list = '';
    let listElement = '';
    let terms = autoCompleteMatch(val);
    for (let i = 0; i < terms.length; i++) {
        list = terms[i];
        listElement += `<li> ${terms[i]} </li>`
    }
    res.innerHTML = `<ul> ${listElement} </ul>`;

    res.addEventListener('click', () => {
        userField.value = list;
        res.innerHTML = '';
    });
    userField.addEventListener('click', () => {
        res.innerHTML = '';
    });
    message.addEventListener('click', () => {
        res.innerHTML = '';
    });
    sendBtn.addEventListener('click', () => {
        res.innerHTML = '';
    });
};

//local storage
const emailToggle = document.getElementById('email');
const publicToggle = document.getElementById('profile');
const timezone = document.getElementById('timezone');
const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');

saveBtn.addEventListener('click', () => {

    localStorage.setItem('email', emailToggle.checked);
    localStorage.setItem('profile', publicToggle.checked);
    localStorage.setItem('timezone', timezone.value);

});

cancelBtn.addEventListener('click', () => {
    localStorage.clear();
});

if (localStorage.getItem('email') == 'true') {
    emailToggle.checked = true;
}
if (localStorage.getItem('profile') == 'true') {
    publicToggle.checked = true;
}
for (let i = 0; i < timezone.length; i++) {
    if (timezone[i].value == localStorage.getItem('timezone')) {
        timezone[i].setAttribute('selected', true);
    }
}