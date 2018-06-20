const getAverage = (serries, weekDaysAverage = false) => {
    return (weekDaysAverage ? getAvarageWeekDays(serries) : getAvarageAll(serries));
};

const getAvarageAll = (serries) => {
    let visitsSum = 0,
        avarageVisitsAll = { 
            averageVisits: 0 
        };

    for(let i = 0; i < serries.length; i++){
        visitsSum += serries[i].visits;
    }
    
    avarageVisitsAll.averageVisits = visitsSum / serries.length;;

    return avarageVisitsAll;
}

const getAvarageWeekDays = (serries) => {
    let weekDay = 0,
        weekDayVisits = 0,
        weekDaysAvarageVisits = {
            Monday: {
                averageVisits: 0,
            },
            Tuesday: {
                averageVisits: 0,
            },
            Wednesday: {
                averageVisits: 0,
            },
            Thursday: {
                averageVisits: 0,
            },
            Friday: {
                averageVisits: 0,
            },
            Saturday: {
                averageVisits: 0,
            },
            Sunday: {
                averageVisits: 0,
            },
        },
        serriesWeekDays = {
            Monday: {
                dayCounter: 0,
                visits: 0,
            },
            Tuesday: {
                dayCounter: 0,
                visits: 0,
            },
            Wednesday: {
                dayCounter: 0,
                visits: 0,
            },
            Thursday: {
                dayCounter: 0,
                visits: 0,
            },
            Friday: {
                dayCounter: 0,
                visits: 0,
            },
            Saturday: {
                dayCounter: 0,
                visits: 0,
            },
            Sunday: {
                dayCounter: 0,
                visits: 0,
            },
        };

    for(let i = 0; i < serries.length; i++){
        weekDay = serries[i].date.getDay();
        weekDayVisits = serries[i].visits;
        switch(weekDay) {
            case 0:
                serriesWeekDays.Sunday.dayCounter++;
                serriesWeekDays.Sunday.visits += weekDayVisits;
                break;
            case 1:
                serriesWeekDays.Monday.dayCounter++;
                serriesWeekDays.Monday.visits += weekDayVisits;
                break;
            case 2:
                serriesWeekDays.Tuesday.dayCounter++;
                serriesWeekDays.Tuesday.visits += weekDayVisits;
                break;
            case 3:
                serriesWeekDays.Wednesday.dayCounter++;
                serriesWeekDays.Wednesday.visits += weekDayVisits;
                break;
            case 4:
                serriesWeekDays.Thursday.dayCounter++;
                serriesWeekDays.Thursday.visits += weekDayVisits;
                break;
            case 5:
                serriesWeekDays.Friday.dayCounter++;
                serriesWeekDays.Friday.visits += weekDayVisits;
                break;
            case 6:
                serriesWeekDays.Saturday.dayCounter++;
                serriesWeekDays.Saturday.visits += weekDayVisits;
                break;
            // default:
            //     process.stdout.write("Wrong date!");
        }
    }

    weekDaysAvarageVisits.Monday.averageVisits = serriesWeekDays.Monday.visits / 
                                                serriesWeekDays.Monday.dayCounter;
    weekDaysAvarageVisits.Tuesday.averageVisits = serriesWeekDays.Tuesday.visits / 
                                                serriesWeekDays.Tuesday.dayCounter;
    weekDaysAvarageVisits.Wednesday.averageVisits = serriesWeekDays.Wednesday.visits / 
                                                serriesWeekDays.Wednesday.dayCounter;
    weekDaysAvarageVisits.Thursday.averageVisits = serriesWeekDays.Thursday.visits / 
                                                serriesWeekDays.Thursday.dayCounter;
    weekDaysAvarageVisits.Friday.averageVisits = serriesWeekDays.Friday.visits / 
                                                serriesWeekDays.Friday.dayCounter;
    weekDaysAvarageVisits.Saturday.averageVisits = serriesWeekDays.Saturday.visits / 
                                                serriesWeekDays.Saturday.dayCounter;
    weekDaysAvarageVisits.Sunday.averageVisits = serriesWeekDays.Sunday.visits / 
                                                serriesWeekDays.Sunday.dayCounter;
   
    return weekDaysAvarageVisits;
}

module.exports = getAverage;
