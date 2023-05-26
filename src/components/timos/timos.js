import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Timos = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [studyHours, setStudyHours] = useState(0);
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        let timerId = null;

        if (running && time > 0) {
            timerId = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (running && time === 0) {
            showNotification();
            setRunning(false);
            incrementStudyHours();
        }

        return () => clearTimeout(timerId);
    }, [running, time]);

    useEffect(() => {
        const savedStudyHours = Cookies.get('studyHours');
        if (savedStudyHours) {
            setStudyHours(parseFloat(savedStudyHours));
        }

        const savedToDoList = Cookies.get('toDoList');
        if (savedToDoList) {
            setToDoList(JSON.parse(savedToDoList));
        }
    }, []);

    useEffect(() => {
        Cookies.set('toDoList', JSON.stringify(toDoList));
    }, [toDoList]);

    const startTimer = (minutes) => {
        setTime(minutes * 60);
        setRunning(true);
    };

    const pauseTimer = () => {
        setRunning(false);
    };

    const restartTimer = () => {
        setRunning(true);
    };

    const stopTimer = () => {
        setRunning(false);
        setTime(0);
    };

    const formatTime = () => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const showNotification = () => {
        if (Notification.permission === 'granted') {
            const notification = new Notification('Timer Finished', {
                body: 'Your timer has reached 0 minutes.',
            });
            notification.addEventListener('click', () => {
                stopNotification(notification);
            });
            playNotificationSound();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    const notification = new Notification('Timer Finished', {
                        body: 'Your timer has reached 0 minutes.',
                    });
                    notification.addEventListener('click', () => {
                        stopNotification(notification);
                    });
                    playNotificationSound();
                }
            });
        }
    };

    const playNotificationSound = () => {
        const audio = new Audio('/path/to/notification-sound.mp3');
        audio.play();
    };

    const stopNotification = (notification) => {
        notification.close();
    };

    const incrementStudyHours = () => {
        const updatedStudyHours = studyHours + time / 3600;
        setStudyHours(updatedStudyHours);
        Cookies.set('studyHours', updatedStudyHours);
    };

    const handleTaskChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask) {
            const updatedToDoList = [...toDoList, newTask];
            setToDoList(updatedToDoList);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedToDoList = [...toDoList];
        updatedToDoList.splice(index, 1);
        setToDoList(updatedToDoList);
    };

    return (
        <div>
            <div>
                <button onClick={() => startTimer(40)}>40 min</button>
                <button onClick={() => startTimer(45)}>45 min</button>
                <button onClick={() => startTimer(50)}>50 min</button>
                <button onClick={() => startTimer(55)}>55 min</button>
                <button onClick={() => startTimer(60)}>60 min</button>
            </div>
            <div className="timer-screen">{formatTime()}</div>
            <div>
                <button onClick={running ? pauseTimer : restartTimer}>
                    {running ? 'Pause Timer' : 'Restart Timer'}
                </button>
                <button onClick={stopTimer}>Stop Timer</button>
            </div>
            <div>Total Study Hours: {studyHours.toFixed(2)}</div>
            <div>
                <h3>To-Do List</h3>
                <input type="text" value={newTask} onChange={handleTaskChange} />
                <button onClick={addTask}>Add Task</button>
                <ul>
                    {toDoList.map((task, index) => (
                        <li key={index}>
                            {task}{' '}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Timos;
