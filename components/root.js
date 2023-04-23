app.component('root',{
    template: 
    /*html*/
    ` 
    <div v-show = "page == 'spider-chart'" > </div> 
    <navBar></navBar>
    <div v-show = "page == 'summary'" > <summary></summary> </div> 
    <div v-show = "page == 'instructorevaluation'"> <instructorevaluation></instructorevaluation></div> 
    <div v-show = "page == 'lessonchat'"> <lessonchat></lessonchat> </div> 
    <div v-show = "page == 'testMI'"><testMI></testMI></div> 
    <div v-show = "page == 'testTeam'"><testTeam></testTeam></div> 
    `,
    data(){
        return{
            page: "summary",
            studentList: [
                {
                    id : 1,
                    name: "Bob Belcher",
                    teachers: ["Mrs. Peters", "Mr. Smith", "Mrs. Bird", "Mr. Cleary"],
                    gradeHistory: {
                        math: {2022: 45, 2021: 49, 2020: 60},
                        english: {2022: 80, 2021: 89, 2020: 85},
                        science : {2022:88, 2021: 74, 2020: 90},
                        history: {2022: 90, 2021: 87, 2020: 74} 
                    },
                    learningTypes: {
                        visual: 44,
                        kinaesthetic: 68,
                        aural: 54,
                        social: 82,
                        solitary: 57,
                        verbal: 34,
                        logical: 59
                    },
                    typesOfIntelligence: {
                        naturalist: 46,
                        musical: 69,
                        logical_mathematical: 37,
                        existential: 96,
                        interpersonal: 47,
                        bodily_kinesthetic: 87,
                        linguistic: 79,
                        intrapersonal: 94
                    },
                    teamPersonality: {
                        pioneer: 35, 
                        guardian: 84, 
                        driver: 93,
                        integrator: 58
                    }
                },
                {
                    id: 2,
                    name: "Alice Anderson",
                    teachers: ["Mrs. Lee", "Mr. Brown", "Mrs. Garcia", "Ms. Robinson"],
                    gradeHistory: {
                        math: {2022: 56, 2021: 61, 2020: 73},
                        english: {2022: 75, 2021: 82, 2020: 79},
                        science: {2022: 92, 2021: 81, 2020: 95},
                        history: {2022: 85, 2021: 89, 2020: 77}
                    },
                    learningTypes: {
                        visual: 52,
                        kinaesthetic: 71,
                        aural: 48,
                        social: 88,
                        solitary: 61,
                        verbal: 39,
                        logical: 67
                    },
                    typesOfIntelligence: {
                        naturalist: 43,
                        musical: 62,
                        logical_mathematical: 49,
                        existential: 91,
                        interpersonal: 53,
                        bodily_kinesthetic: 77,
                        linguistic: 81,
                        intrapersonal: 92
                    },
                    teamPersonality: {
                        pioneer: 62,
                        guardian: 77,
                        driver: 88,
                        integrator: 51
                    }
                },
                {
                    id: 3,
                    name: "Linda Belcher",
                    teachers: ["Mr. Johnson", "Ms. Davis", "Mrs. Thompson", "Mr. Martin"],
                    gradeHistory: {
                        math: {2022: 52, 2021: 56, 2020: 65},
                        english: {2022: 78, 2021: 87, 2020: 81},
                        science: {2022: 90, 2021: 77, 2020: 92},
                        history: {2022: 87, 2021: 91, 2020: 79}
                    },
                    learningTypes: {
                        visual: 50,
                        kinaesthetic: 72,
                        aural: 52,
                        social: 85,
                        solitary: 60,
                        verbal: 37,
                        logical: 63
                    },
                    typesOfIntelligence: {
                        naturalist: 48,
                        musical: 67,
                        logical_mathematical: 42,
                        existential: 88,
                        interpersonal: 51,
                        bodily_kinesthetic: 79,
                        linguistic: 76,
                        intrapersonal: 90
                    },
                    teamPersonality: {
                        pioneer: 60,
                        guardian: 80,
                        driver: 87,
                        integrator: 53
                    }
                },
                {
                    id: 4,
                    name: "William Tran",
                    teachers: ["Ms. Lee", "Mr. Johnson", "Mrs. Davis"],
                    gradeHistory: {
                        math: {2022: 67, 2021: 73, 2020: 78},
                        english: {2022: 85, 2021: 89, 2020: 91},
                        science : {2022: 77, 2021: 81, 2020: 84},
                        history: {2022: 91, 2021: 86, 2020: 80} 
                    },
                    learningTypes: {
                        visual: 79,
                        kinaesthetic: 58,
                        aural: 67,
                        social: 92,
                        solitary: 47,
                        verbal: 61,
                        logical: 83
                    },
                    typesOfIntelligence: {
                        naturalist: 72,
                        musical: 89,
                        logical_mathematical: 68,
                        existential: 94,
                        interpersonal: 57,
                        bodily_kinesthetic: 81,
                        linguistic: 77,
                        intrapersonal: 96
                    },
                    teamPersonality: {
                        pioneer: 45, 
                        guardian: 72, 
                        driver: 84,
                        integrator: 63
                    }
                },
                {
                    id: 5,
                    name: "Charlie Chen",
                    teachers: ["Mr. Brown", "Mrs. Kim", "Ms. Rodriguez"],
                    gradeHistory: {
                        math: {2022: 95, 2021: 81, 2020: 76},
                        english: {2022: 87, 2021: 91, 2020: 88},
                        science : {2022: 92, 2021: 85, 2020: 87},
                        history: {2022: 59, 2021: 42, 2020: 66} 
                    },
                    learningTypes: {
                        visual: 63,
                        kinaesthetic: 68,
                        aural: 52,
                        social: 87,
                        solitary: 59,
                        verbal: 69,
                        logical: 92
                    },
                    typesOfIntelligence: {
                        naturalist: 55,
                        musical: 81,
                        logical_mathematical: 13,
                        existential: 92,
                        interpersonal: 67,
                        bodily_kinesthetic: 79,
                        linguistic: 28,
                        intrapersonal: 78
                    },
                    teamPersonality: {
                        pioneer: 72, 
                        guardian: 62, 
                        driver: 79,
                        integrator: 55
                    }
                },
                {
                    id: 6,
                    name: "David Davis",
                    teachers: ["Mr. Wilson", "Mrs. Brown", "Ms. Martinez"],
                    gradeHistory: {
                        math: {2022: 84, 2021: 79, 2020: 82},
                        english: {2022: 60, 2021: 46, 2020: 89},
                        science : {2022: 78, 2021: 82, 2020: 86},
                        history: {2022: 87, 2021: 90, 2020: 88} 
                    },
                    learningTypes: {
                        visual: 67,
                        kinaesthetic: 24,
                        aural: 56,
                        social: 82,
                        solitary: 62,
                        verbal: 71,
                        logical: 27
                    },
                    typesOfIntelligence: {
                        naturalist: 49,
                        musical: 87,
                        logical_mathematical: 35,
                        existential: 90,
                        interpersonal: 72,
                        bodily_kinesthetic: 83,
                        linguistic: 40,
                        intrapersonal: 91
                    },
                    teamPersonality: {
                        pioneer: 68, 
                        guardian: 58, 
                        driver: 80,
                        integrator: 72
                    }
                },
                {
                    id: 7,
                    name: "Emily Evans",
                    teachers: ["Mr. Garcia", "Mrs. Lee", "Ms. Rodriguez"],
                    gradeHistory: {
                        math: {2022: 78, 2021: 82, 2020: 85},
                        english: {2022: 52, 2021: 38, 2020: 31},
                        science : {2022: 84, 2021: 80, 2020: 87},
                        history: {2022: 91, 2021: 90, 2020: 88} 
                    },
                    learningTypes: {
                        visual: 66,
                        kinaesthetic: 46,
                        aural: 54,
                        social: 83,
                        solitary: 61,
                        verbal: 70,
                        logical: 74
                    },
                    typesOfIntelligence: {
                        naturalist: 58,
                        musical: 83,
                        logical_mathematical: 72,
                        existential: 89,
                        interpersonal: 71,
                        bodily_kinesthetic: 61,
                        linguistic: 43,
                        intrapersonal: 50
                    },
                    teamPersonality: {
                        pioneer: 75, 
                        guardian: 72, 
                        driver: 69,
                        integrator: 80
                    }
                },
                {
                    id: 8,
                    name: "Samantha Singh",
                    teachers: ["Mrs. Johnson", "Mr. Patel", "Ms. Wilson"],
                    gradeHistory: {
                        math: {2022: 88, 2021: 85, 2020: 90},
                        english: {2022: 61, 2021: 70, 2020: 88},
                        science : {2022: 63, 2021: 65, 2020: 86},
                        history: {2022: 89, 2021: 42, 2020: 57} 
                    },
                    learningTypes: {
                        visual: 68,
                        kinaesthetic: 42,
                        aural: 58,
                        social: 52,
                        solitary: 23,
                        verbal: 72,
                        logical: 75
                    },
                    typesOfIntelligence: {
                        naturalist: 61,
                        musical: 46,
                        logical_mathematical: 79,
                        existential: 32,
                        interpersonal: 73,
                        bodily_kinesthetic: 84,
                        linguistic: 86,
                        intrapersonal: 90
                    },
                    teamPersonality: {
                        pioneer: 72, 
                        guardian: 59, 
                        driver: 83,
                        integrator: 37
                    }
                },
                {
                    id: 9,
                    name: "John Kim",
                    teachers: ["Mrs. Hernandez", "Ms. Lee", "Mr. Patel", "Mrs. Wilson"],
                    gradeHistory: {
                        math: {2022: 91, 2021: 89, 2020: 32},
                        english: {2022: 73, 2021: 92, 2020: 90},
                        science : {2022: 35, 2021: 87, 2020: 83},
                        history: {2022: 50, 2021: 72, 2020: 89} 
                    },
                    learningTypes: {
                        visual: 62,
                        kinaesthetic: 70,
                        aural: 66,
                        social: 81,
                        solitary: 68,
                        verbal: 75,
                        logical: 80
                    },
                    typesOfIntelligence: {
                        naturalist: 63,
                        musical: 87,
                        logical_mathematical: 51,
                        existential: 90,
                        interpersonal: 72,
                        bodily_kinesthetic: 53,
                        linguistic: 38,
                        intrapersonal: 92
                    },
                    teamPersonality: {
                        pioneer: 77, 
                        guardian: 63, 
                        driver: 79,
                        integrator: 28
                    }
                },
                {
                    id: 10,
                    name: "Emily Chen",
                    teachers: ["Mr. Brown", "Ms. Lee", "Mr. Rodriguez"],
                    gradeHistory: {
                        math: {2022: 87, 2021: 84, 2020: 86},
                        english: {2022: 91, 2021: 89, 2020: 87},
                        science : {2022: 42, 2021: 50, 2020: 41},
                        history: {2022: 89, 2021: 90, 2020: 88} 
                    },
                    learningTypes: {
                        visual: 70,
                        kinaesthetic: 64,
                        aural: 30,
                        social: 36,
                        solitary: 68,
                        verbal: 62,
                        logical: 78
                    },
                    typesOfIntelligence: {
                        naturalist: 66,
                        musical: 82,
                        logical_mathematical: 75,
                        existential: 88,
                        interpersonal: 70,
                        bodily_kinesthetic: 78,
                        linguistic: 84,
                        intrapersonal: 90
                    },
                    teamPersonality: {
                        pioneer: 73, 
                        guardian: 76, 
                        driver: 81,
                        integrator: 67
                    }
                },
                {
                    id: 11,
                    name: "Jessica Gomez",
                    teachers: ["Mrs. Thompson", "Mr. Patel", "Mrs. Kim", "Mr. Rodriguez"],
                    gradeHistory: {
                        math: {2022: 84, 2021: 86, 2020: 82},
                        english: {2022: 88, 2021: 90, 2020: 87},
                        science : {2022: 82, 2021: 84, 2020: 80},
                        history: {2022: 80, 2021: 88, 2020: 89} 
                    },
                    learningTypes: {
                        visual: 65,
                        kinaesthetic: 40,
                        aural: 62,
                        social: 78,
                        solitary: 48,
                        verbal: 75,
                        logical: 77
                    },
                    typesOfIntelligence: {
                        naturalist: 62,
                        musical: 84,
                        logical_mathematical: 71,
                        existential: 90,
                        interpersonal: 73,
                        bodily_kinesthetic: 31,
                        linguistic: 86,
                        intrapersonal: 91
                    },
                    teamPersonality: {
                        pioneer: 75, 
                        guardian: 72, 
                        driver: 81,
                        integrator: 69
                    }
                },
                {
                    id: 12,
                    name: "Michael Kim",
                    teachers: ["Mr. Jones", "Mrs. Lee", "Mr. Davis"],
                    gradeHistory: {
                        math: {2022: 88, 2021: 85, 2020: 87},
                        english: {2022: 92, 2021: 69, 2020: 51},
                        science : {2022: 75, 2021: 82, 2020: 80},
                        history: {2022: 91, 2021: 80, 2020: 88} 
                    },
                    learningTypes: {
                        visual: 43,
                        kinaesthetic: 66,
                        aural: 64,
                        social: 69,
                        solitary: 71,
                        verbal: 77,
                        logical: 40
                    },
                    typesOfIntelligence: {
                        naturalist: 65,
                        musical: 85,
                        logical_mathematical: 78,
                        existential: 49,
                        interpersonal: 70,
                        bodily_kinesthetic: 80,
                        linguistic: 87,
                        intrapersonal: 91
                    },
                    teamPersonality: {
                        pioneer: 70, 
                        guardian: 71, 
                        driver: 23,
                        integrator: 64
                    }
                },
                {
                    id: 13,
                    name: "Alexandra Nguyen",
                    teachers: ["Ms. Brown", "Mr. Kim", "Mrs. Patel", "Mr. Chen"],
                    gradeHistory: {
                        math: {2022: 86, 2021: 85, 2020: 84},
                        english: {2022: 90, 2021: 88, 2020: 89},
                        science : {2022: 82, 2021: 80, 2020: 81},
                        history: {2022: 82, 2021: 77, 2020: 89} 
                    },
                    learningTypes: {
                        visual: 70,
                        kinaesthetic: 67,
                        aural: 61,
                        social: 21,
                        solitary: 69,
                        verbal: 76,
                        logical: 97
                    },
                    typesOfIntelligence: {
                        naturalist: 61,
                        musical: 82,
                        logical_mathematical: 76,
                        existential: 58,
                        interpersonal: 53,
                        bodily_kinesthetic: 83,
                        linguistic: 85,
                        intrapersonal: 89
                    },
                    teamPersonality: {
                        pioneer: 68, 
                        guardian: 75, 
                        driver: 80,
                        integrator: 71
                    }
                },
                {
                    id: 14,
                    name: "Ethan Rodriguez",
                    teachers: ["Ms. Davis", "Mr. Nguyen", "Mrs. Jones"],
                    gradeHistory: {
                        math: {2022: 79, 2021: 50, 2020: 81},
                        english: {2022: 88, 2021: 87, 2020: 49},
                        science : {2022: 76, 2021: 75, 2020: 74},
                        history: {2022: 91, 2021: 92, 2020: 80} 
                    },
                    learningTypes: {
                        visual: 65,
                        kinaesthetic: 63,
                        aural: 87,
                        social: 77,
                        solitary: 38,
                        verbal: 73,
                        logical: 71
                    },
                    typesOfIntelligence: {
                        naturalist: 59,
                        musical: 80,
                        logical_mathematical: 73,
                        existential: 55,
                        interpersonal: 66,
                        bodily_kinesthetic: 21,
                        linguistic: 83,
                        intrapersonal: 47
                    },
                    teamPersonality: {
                        pioneer: 67, 
                        guardian: 72, 
                        driver: 77,
                        integrator: 69
                    }
                },                
                {
                    id: 15,
                    name: "Samantha Lee",
                    teachers: ["Mr. Wilson", "Ms. Kim", "Mrs. Chang"],
                    gradeHistory: {
                        math: {2022: 68, 2021: 91, 2020: 90},
                        english: {2022: 85, 2021: 84, 2020: 86},
                        science : {2022: 76, 2021: 44, 2020: 42},
                        history: {2022: 93, 2021: 92, 2020: 94} 
                    },
                    learningTypes: {
                        visual: 83,
                        kinaesthetic: 76,
                        aural: 48,
                        social: 55,
                        solitary: 71,
                        verbal: 62,
                        logical: 79
                    },
                    typesOfIntelligence: {
                        naturalist: 70,
                        musical: 75,
                        logical_mathematical: 81,
                        existential: 44,
                        interpersonal: 77,
                        bodily_kinesthetic: 60,
                        linguistic: 46,
                        intrapersonal: 43
                    },
                    teamPersonality: {
                        pioneer: 63, 
                        guardian: 46, 
                        driver: 79,
                        integrator: 31
                    }
                },
                {
                    id: 16,
                    name: "Jessica Ong",
                    teachers: ["Mrs. Patel", "Mr. Johnson", "Ms. Nguyen"],
                    gradeHistory: {
                        math: {2022: 78, 2021: 81, 2020: 76},
                        english: {2022: 55, 2021: 59, 2020: 87},
                        science : {2022: 42, 2021: 65, 2020: 58},
                        history: {2022: 87, 2021: 44, 2020: 78} 
                    },
                    learningTypes: {
                        visual: 69,
                        kinaesthetic: 81,
                        aural: 65,
                        social: 71,
                        solitary: 30,
                        verbal: 73,
                        logical: 52
                    },
                    typesOfIntelligence: {
                        naturalist: 32,
                        musical: 65,
                        logical_mathematical: 75,
                        existential: 49,
                        interpersonal: 74,
                        bodily_kinesthetic: 42,
                        linguistic: 81,
                        intrapersonal: 26
                    },
                    teamPersonality: {
                        pioneer: 71, 
                        guardian: 41, 
                        driver: 25,
                        integrator: 69
                    }
                },
                {
                    id: 17,
                    name: "Alexandra Xu",
                    teachers: ["Mr. Anderson", "Mrs. Taylor", "Ms. Lee"],
                    gradeHistory: {
                        math: {2022: 89, 2021: 91, 2020: 85},
                        english: {2022: 92, 2021: 82, 2020: 77},
                        science : {2022: 88, 2021: 85, 2020: 82},
                        history: {2022: 90, 2021: 69, 2020: 87} 
                    },
                    learningTypes: {
                        visual: 24,
                        kinaesthetic: 76,
                        aural: 88,
                        social: 40,
                        solitary: 89,
                        verbal: 85,
                        logical: 92
                    },
                    typesOfIntelligence: {
                        naturalist: 80,
                        musical: 89,
                        logical_mathematical: 92,
                        existential: 84,
                        interpersonal: 30,
                        bodily_kinesthetic: 28,
                        linguistic: 87,
                        intrapersonal: 52
                    },
                    teamPersonality: {
                        pioneer: 79, 
                        guardian: 90, 
                        driver: 92,
                        integrator: 85
                    }
                },
                {
                    id: 18,
                    name: "Ethan Garcia",
                    teachers: ["Mrs. Davis", "Mr. Lee", "Ms. Wilson"],
                    gradeHistory: {
                        math: {2022: 80, 2021: 75, 2020: 78},
                        english: {2022: 85, 2021: 81, 2020: 80},
                        science : {2022: 88, 2021: 86, 2020: 89},
                        history: {2022: 60, 2021: 91, 2020: 87} 
                    },
                    learningTypes: {
                        visual: 75,
                        kinaesthetic: 80,
                        aural: 85,
                        social: 73,
                        solitary: 63,
                        verbal: 79,
                        logical: 77
                    },
                    typesOfIntelligence: {
                        naturalist: 78,
                        musical: 86,
                        logical_mathematical: 81,
                        existential: 85,
                        interpersonal: 82,
                        bodily_kinesthetic: 88,
                        linguistic: 75,
                        intrapersonal: 77
                    },
                    teamPersonality: {
                        pioneer: 82, 
                        guardian: 80, 
                        driver: 75,
                        integrator: 81
                    }
                },
                {
                    id: 19,
                    name: "Sophia Martin",
                    teachers: ["Mrs. Anderson", "Mr. Rodriguez", "Ms. Davis", "Mr. Lee"],
                    gradeHistory: {
                        math: {2022: 85, 2021: 83, 2020: 88},
                        english: {2022: 90, 2021: 88, 2020: 87},
                        science : {2022: 92, 2021: 89, 2020: 90},
                        history: {2022: 67, 2021: 45, 2020: 82} 
                    },
                    learningTypes: {
                        visual: 72,
                        kinaesthetic: 68,
                        aural: 85,
                        social: 80,
                        solitary: 77,
                        verbal: 82,
                        logical: 75
                    },
                    typesOfIntelligence: {
                        naturalist: 83,
                        musical: 45,
                        logical_mathematical: 77,
                        existential: 88,
                        interpersonal: 90,
                        bodily_kinesthetic: 75,
                        linguistic: 80,
                        intrapersonal: 22
                    },
                    teamPersonality: {
                        pioneer: 28, 
                        guardian: 45, 
                        driver: 72,
                        integrator: 80
                    }
                },
                {
                    id: 20,
                    name: "Liam Bindoff",
                    teachers: ["Mrs. Davis", "Mr. Wilson", "Ms. Lee", "Mr. Brown"],
                    gradeHistory: {
                        math: {2022: 78, 2021: 76, 2020: 80},
                        english: {2022: 85, 2021: 82, 2020: 79},
                        science : {2022: 82, 2021: 77, 2020: 84},
                        history: {2022: 80, 2021: 78, 2020: 73} 
                    },
                    learningTypes: {
                        visual: 63,
                        kinaesthetic: 65,
                        aural: 55,
                        social: 83,
                        solitary: 72,
                        verbal: 45,
                        logical: 50
                    },
                    typesOfIntelligence: {
                        naturalist: 66,
                        musical: 75,
                        logical_mathematical: 69,
                        existential: 81,
                        interpersonal: 74,
                        bodily_kinesthetic: 82,
                        linguistic: 66,
                        intrapersonal: 93
                    },
                    teamPersonality: {
                        pioneer: 49, 
                        guardian: 75, 
                        driver: 60,
                        integrator: 85
                    }
                }
                
                        
            ]
        }
    }, 
    method:{
        
    }

})