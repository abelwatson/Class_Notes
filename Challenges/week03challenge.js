let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

//Challenge
/* Bronze

    - Pick an episode to console.log
    - Using dot notation, walk through the Netflix object and print off an episode number and an episode name.
*/

console.log(netflix.season1.seasonInfo.episodeInfo[1].episode, netflix.season1.seasonInfo.episodeInfo[1].episodeName);

//Silver

/*
Create an object using an object constructor. Call it teacher and assign it properties of firstName, lastName, className (that they're teaching), and isTenured property with a boolean value.
 */


let teacher = new Object

teacher.firstName = "Mrs";
teacher.lastName = "Puff";
teacher.className = "Boating School";
teacher.isTenured = true;

console.table(teacher);

/*
Vibranium Unobtanium Captain America Iron Man busted Thor's behind mode.

Utilize existing object constructor to add teacher .kind property that utilizes a conditional statement which check if .isTenured is true or false. If true, print INSIDE THE OBJECT "This teacher is tenured", otherwise, print "This teacher is not tenured."
 */

teacher.whatKind = function() {
    if (this.isTenured){
        this.whatKind = "Teacher is tenured."
    } else {
        this.whatKind = "This teacher is not tenured."
    }
}
teacher.whatKind();
console.table(teacher)