// js code for toggle light and dark mode
let selectMode = document.querySelector('.select-mode');
let body = document.querySelector('.mainBody');
let theme;
let storeMode;
if(selectMode)
{
    selectMode.addEventListener('click',()=>{
        selectMode.classList.toggle('active');
        body.classList.toggle('active');
        if(body.classList.contains('active'))
        {
            theme = "DARK";
        }
        else
        {
            theme = "LIGHT";
        }
        localStorage.setItem('storemodes',JSON.stringify(theme));
    })

    storeMode = JSON.parse(localStorage.getItem('storemodes') || '[]');
    if(storeMode == "DARK")
    {
        body.classList.remove('active');
        selectMode.click();
    }
}

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
;

let stopWatchText = document.querySelector('.stopWatch-text');

function stopWatch()
{
    seconds++;
    if(seconds == 60)
    {
        seconds = 0;
        minutes++;
        if(minutes == 60)
        {
            minutes = 0;
            hours++;
        }
    }

    let hoursData = hours < 10 ? "0" + hours : hours;
    let minutesData = minutes < 10 ? "0" + minutes : minutes;
    let secondsData = seconds < 10 ? "0" + seconds : seconds;

    stopWatchText.innerText = hoursData + ":" + minutesData + ":" + secondsData;
}

function start()
{
    if(timer!==null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function pause()
{
    clearInterval(timer);
}

function reset()
{
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopWatchText.innerText = "00:00:00";
    clearInterval(timer);
}

let addLapsBox = document.querySelector('.addlaps-box ul');
let lapCounter = 1; // Variable to keep track of lap numbers
let getminiLaps = document.querySelector('.mini-laps-box ul');
let lapCounter2 = 1;

function addLaps() {
    let lapTime = stopWatchText.innerText; // Get the current stopwatch time
    let lapElement = document.createElement('li'); // Create a new list item element
    lapElement.innerHTML = `
        <strong style="font-size: 13px; background: red; border-radius: 10px; padding: 6px 12px; color: white;">Lap ${lapCounter}</strong>
        <p>${lapTime}</p>
    `;
    addLapsBox.appendChild(lapElement); // Append the new lap element to the addlaps-box
    lapCounter++; // Increment lap counter for the next lap

    // miniLapcounter js code
    let getlapValue = stopWatchText.innerText;
    let createminiLap = document.createElement('li');
    createminiLap = `<li>
                        <p>Lap ${lapCounter2}</p> <span>${getlapValue}</span>
                    </li>`
    getminiLaps.insertAdjacentHTML('beforeend',createminiLap);
    lapCounter2++;
}

function deleteLap()
{
    addLapsBox.innerHTML = "";
    lapCounter = 1;
}

function deleteminiLap()
{
    getminiLaps.innerHTML = "";
    lapCounter2 = 1;
}