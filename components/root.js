app.component('root',{
    template: 
    /*html*/
    `
    
    <nav>
      <button class = "navButton" @click = "navclick('summaryPage')">Summary</button> 
      <button class = "navButton" @click = "navclick('instructorevauation')">Evaluation</button>
      <button class = "navButton" @click = "navclick('testTeam')">Team Test</button>
      <button class = "navButton" @click = "navclick('testMI')">Learning Type Test</button>
      <button class = "navButton" @click = "navclick('testTEI')">Intelligence Type Test</button>
      <button class = "navButton" @click = "navclick('lessonchat')">Lesson Chat</button>
     </nav>

    <div v-show = "page == 'summary'"><summaryPage></summaryPage></div>
    <div v-show = "page == 'instructorevauation'"><instructorevaluation></instructorevaluation></div> 
    <div v-show = "page == 'lessonchat'"> <lessonchat></lessonchat> </div> 
    <div v-show = "page == 'testMI'"><testMI></testMI></div> 
    <div v-show = "page == 'testTeam'"><testTeam></testTeam></div> 
    <div v-show = "page == 'testTEI'" > <testTEI></testTEI> </div> 
    <li v-for="(value, key) in studentList" :key="key">
    {{ studentAverages(key) }}
    </li>
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
                        visual: 4,
                        kinaesthetic: 8,
                        aural: 5,
                        social: 8,
                        solitary: 7,
                        verbal: 4,
                        logical: 5
                    },
                    typesOfIntelligence: {
                        naturalist: 4,
                        musical: 6,
                        logical_mathematical: 7,
                        existential: 9,
                        interpersonal: 4,
                        bodily_kinesthetic: 7,
                        linguistic: 7,
                        intrapersonal: 4
                    },
                    teamPersonality: {
                        pioneer: 5, 
                        guardian: 4, 
                        driver: 9,
                        integrator: 5
                    },
                    learningTypesStudent: {
                        visual: 6,
                        kinaesthetic: 8,
                        aural: 5,
                        social: 9,
                        solitary: 7,
                        verbal: 3,
                        logical: 6
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 5,
                        musical: 7,
                        logical_mathematical: 4,
                        existential: 9,
                        interpersonal: 5,
                        bodily_kinesthetic: 8,
                        linguistic: 2,
                        intrapersonal: 10
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 9,
                        driver: 8,
                        integrator: 4
                    },
                    learningTypesTeacher: {
                        visual: 8,
                        kinaesthetic: 5,
                        aural: 3,
                        social: 4,
                        solitary: 6,
                        verbal: 10,
                        logical: 7
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 2,
                        musical: 8,
                        logical_mathematical: 7,
                        existential: 9,
                        interpersonal: 4,
                        bodily_kinesthetic: 5,
                        linguistic: 1,
                        intrapersonal: 3
                    },
                    teamPersonalityTeacher: {
                        pioneer: 4,
                        guardian: 6,
                        driver: 10,
                        integrator: 2
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
                        visual: 5,
                        kinaesthetic: 7,
                        aural: 4,
                        social: 8,
                        solitary: 1,
                        verbal: 3,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 3,
                        musical: 6,
                        logical_mathematical: 9,
                        existential: 1,
                        interpersonal: 5,
                        bodily_kinesthetic: 7,
                        linguistic: 8,
                        intrapersonal: 2
                    },
                    teamPersonality: {
                        pioneer: 2,
                        guardian: 7,
                        driver: 8,
                        integrator: 1
                    }, 
                    learningTypesStudent: {
                        visual: 5,
                        kinaesthetic: 6,
                        aural: 7,
                        social: 4,
                        solitary: 8,
                        verbal: 3,
                        logical: 9
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 7,
                        musical: 8,
                        logical_mathematical: 3,
                        existential: 5,
                        interpersonal: 6,
                        bodily_kinesthetic: 9,
                        linguistic: 2,
                        intrapersonal: 4
                    },
                    teamPersonalityStudent: {
                        pioneer: 9,
                        guardian: 7,
                        driver: 8,
                        integrator: 6
                    },
                    learningTypesTeacher: {
                        visual: 7,
                        kinaesthetic: 4,
                        aural: 9,
                        social: 5,
                        solitary: 1,
                        verbal: 6,
                        logical: 10
                      },
                      typesOfIntelligenceTeacher: {
                        naturalist: 8,
                        musical: 2,
                        logical_mathematical: 6,
                        existential: 3,
                        interpersonal: 9,
                        bodily_kinesthetic: 7,
                        linguistic: 4,
                        intrapersonal: 5
                      },
                      teamPersonalityTeacher: {
                        pioneer: 10,
                        guardian: 1,
                        driver: 3,
                        integrator: 8
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
                        visual: 5,
                        kinaesthetic: 7,
                        aural: 5,
                        social: 8,
                        solitary: 6,
                        verbal: 3,
                        logical: 6
                    },
                    typesOfIntelligence: {
                        naturalist: 4,
                        musical: 6,
                        logical_mathematical: 4,
                        existential: 8,
                        interpersonal: 5,
                        bodily_kinesthetic: 7,
                        linguistic: 3,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 6,
                        guardian: 5,
                        driver: 8,
                        integrator: 5
                    },
                    learningTypesStudent: {
                        visual: 7,
                        kinaesthetic: 6,
                        aural: 8,
                        social: 5,
                        solitary: 4,
                        verbal: 9,
                        logical: 3
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 5,
                        logical_mathematical: 9,
                        existential: 4,
                        interpersonal: 7,
                        bodily_kinesthetic: 8,
                        linguistic: 2,
                        intrapersonal: 3
                    },
                    teamPersonalityStudent: {
                        pioneer: 8,
                        guardian: 6,
                        driver: 9,
                        integrator: 7,
                        pioneer: 6,
                        guardian: 8,
                        driver: 7,
                        integrator: 3
                    },
                    learningTypesTeacher: {
                        visual: 3,
                        kinaesthetic: 9,
                        aural: 2,
                        social: 5,
                        solitary: 4,
                        verbal: 6,
                        logical: 8
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 2,
                        musical: 4,
                        logical_mathematical: 9,
                        existential: 7,
                        interpersonal: 6,
                        bodily_kinesthetic: 3,
                        linguistic: 1,
                        intrapersonal: 8
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 6,
                        driver: 10,
                        integrator: 3
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
                        visual: 7,
                        kinaesthetic: 5,
                        aural: 6,
                        social: 2,
                        solitary: 7,
                        verbal: 1,
                        logical: 8
                    },
                    typesOfIntelligence: {
                        naturalist: 7,
                        musical: 9,
                        logical_mathematical: 6,
                        existential: 4,
                        interpersonal: 5,
                        bodily_kinesthetic: 1,
                        linguistic: 7,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 5, 
                        guardian: 7, 
                        driver: 8,
                        integrator: 3
                    },
                    learningTypesStudent: {
                        visual: 8,
                        kinaesthetic: 5,
                        aural: 6,
                        social: 7,
                        solitary: 3,
                        verbal: 4,
                        logical: 9
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 7,
                        logical_mathematical: 4,
                        existential: 8,
                        interpersonal: 5,
                        bodily_kinesthetic: 9,
                        linguistic: 2,
                        intrapersonal: 3
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 9,
                        driver: 6,
                        integrator: 8,
                        pioneer: 4, 
                        guardian: 7, 
                        driver: 8,
                        integrator: 6
                    },       
                    learningTypesTeacher: {
                        visual: 2,
                        kinaesthetic: 10,
                        aural: 4,
                        social: 8,
                        solitary: 7,
                        verbal: 3,
                        logical: 5
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 9,
                        musical: 6,
                        logical_mathematical: 8,
                        existential: 3,
                        interpersonal: 7,
                        bodily_kinesthetic: 5,
                        linguistic: 1,
                        intrapersonal: 2
                    },
                    teamPersonalityTeacher: {
                        pioneer: 6,
                        guardian: 2,
                        driver: 8,
                        integrator: 10
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
                        visual: 6,
                        kinaesthetic: 8,
                        aural: 2,
                        social: 8,
                        solitary: 9,
                        verbal: 6,
                        logical: 9
                    },
                    typesOfIntelligence: {
                        naturalist: 5,
                        musical: 8,
                        logical_mathematical: 3,
                        existential: 2,
                        interpersonal: 7,
                        bodily_kinesthetic: 7,
                        linguistic: 8,
                        intrapersonal: 8
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 2, 
                        driver: 7,
                        integrator: 5
                    },
                    learningTypesStudent: {
                        visual: 6,
                        kinaesthetic: 5,
                        aural: 7,
                        social: 8,
                        solitary: 3,
                        verbal: 9,
                        logical: 4
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 8,
                        musical: 7,
                        logical_mathematical: 5,
                        existential: 9,
                        interpersonal: 6,
                        bodily_kinesthetic: 3,
                        linguistic: 2,
                        intrapersonal: 4
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 9,
                        driver: 6,
                        integrator: 2,
                        pioneer: 2, 
                        guardian: 6, 
                        driver: 9,
                        integrator: 5
                    },
                    learningTypesTeacher: {
                        visual: 6,
                        kinaesthetic: 9,
                        aural: 4,
                        social: 8,
                        solitary: 2,
                        verbal: 7,
                        logical: 5
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 3,
                        musical: 8,
                        logical_mathematical: 6,
                        existential: 7,
                        interpersonal: 9,
                        bodily_kinesthetic: 5,
                        linguistic: 2,
                        intrapersonal: 4
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 7,
                        driver: 9,
                        integrator: 3
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
                        visual: 6,
                        kinaesthetic: 4,
                        aural: 6,
                        social: 2,
                        solitary: 6,
                        verbal: 7,
                        logical: 2
                    },
                    typesOfIntelligence: {
                        naturalist: 4,
                        musical: 8,
                        logical_mathematical: 3,
                        existential: 1,
                        interpersonal: 7,
                        bodily_kinesthetic: 3,
                        linguistic: 4,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 6, 
                        guardian: 5, 
                        driver: 8,
                        integrator: 2
                    },
                    learningTypesStudent: {
                        visual: 4,
                        kinaesthetic: 6,
                        aural: 7,
                        social: 5,
                        solitary: 8,
                        verbal: 5,
                        logical: 6
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 7,
                        musical: 6,
                        logical_mathematical: 5,
                        existential: 9,
                        interpersonal: 6,
                        bodily_kinesthetic: 4,
                        linguistic: 7,
                        intrapersonal: 5
                    },
                    teamPersonalityStudent: {
                        pioneer: 8,
                        guardian: 5,
                        driver: 6,
                        integrator: 9,
                        pioneer: 6, 
                        guardian: 8, 
                        driver: 8,
                        integrator: 2
                    },
                    learningTypesTeacher: {
                        visual: 4,
                        kinaesthetic: 6,
                        aural: 8,
                        social: 3,
                        solitary: 9,
                        verbal: 2,
                        logical: 7
                      },
                      typesOfIntelligenceTeacher: {
                        naturalist: 5,
                        musical: 9,
                        logical_mathematical: 7,
                        existential: 3,
                        interpersonal: 4,
                        bodily_kinesthetic: 8,
                        linguistic: 6,
                        intrapersonal: 2
                      },
                      teamPersonalityTeacher: {
                        pioneer: 7,
                        guardian: 1,
                        driver: 10,
                        integrator: 5
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
                        visual: 6,
                        kinaesthetic: 4,
                        aural: 5,
                        social: 3,
                        solitary: 6,
                        verbal: 7,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 5,
                        musical: 3,
                        logical_mathematical: 2,
                        existential: 8,
                        interpersonal: 1,
                        bodily_kinesthetic: 6,
                        linguistic: 3,
                        intrapersonal: 3
                    },
                    teamPersonality: {
                        pioneer: 5, 
                        guardian: 2, 
                        driver: 6,
                        integrator: 8
                    },
                    learningTypesStudent: {
                        visual: 7,
                        kinaesthetic: 4,
                        aural: 6,
                        social: 9,
                        solitary: 5,
                        verbal: 6,
                        logical: 4
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 8,
                        logical_mathematical: 7,
                        existential: 4,
                        interpersonal: 9,
                        bodily_kinesthetic: 3,
                        linguistic: 5,
                        intrapersonal: 6
                    },
                    teamPersonalityStudent: {
                        pioneer: 5,
                        guardian: 7,
                        driver: 6,
                        integrator: 8,
                        pioneer: 5, 
                        guardian: 7, 
                        driver: 9,
                        integrator: 8
                    },
                    learningTypesTeacher: {
                        visual: 7,
                        kinaesthetic: 3,
                        aural: 6,
                        social: 8,
                        solitary: 2,
                        verbal: 5,
                        logical: 9
                      },
                      typesOfIntelligenceTeacher: {
                        naturalist: 4,
                        musical: 2,
                        logical_mathematical: 8,
                        existential: 6,
                        interpersonal: 7,
                        bodily_kinesthetic: 5,
                        linguistic: 1,
                        intrapersonal: 3
                      },
                      teamPersonalityTeacher: {
                        pioneer: 8,
                        guardian: 4,
                        driver: 5,
                        integrator: 7
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
                        visual: 8,
                        kinaesthetic: 2,
                        aural: 8,
                        social: 5,
                        solitary: 2,
                        verbal: 2,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 1,
                        musical: 4,
                        logical_mathematical: 9,
                        existential: 3,
                        interpersonal: 7,
                        bodily_kinesthetic: 4,
                        linguistic: 8,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 2, 
                        guardian: 9, 
                        driver: 8,
                        integrator: 3
                    }, 
                    learningTypesStudent: {
                        visual: 9,
                        kinaesthetic: 5,
                        aural: 7,
                        social: 3,
                        solitary: 6,
                        verbal: 8,
                        logical: 4
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 5,
                        musical: 4,
                        logical_mathematical: 8,
                        existential: 6,
                        interpersonal: 7,
                        bodily_kinesthetic: 9,
                        linguistic: 5,
                        intrapersonal: 4
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 5,
                        driver: 8,
                        integrator: 6,
                        pioneer: 2, 
                        guardian: 9, 
                        driver: 8,
                        integrator: 3
                    },
                    learningTypesTeacher: {
                        visual: 4,
                        kinaesthetic: 9,
                        aural: 6,
                        social: 8,
                        solitary: 2,
                        verbal: 5,
                        logical: 10
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 7,
                        musical: 3,
                        logical_mathematical: 9,
                        existential: 6,
                        interpersonal: 5,
                        bodily_kinesthetic: 8,
                        linguistic: 2,
                        intrapersonal: 4
                    },
                    teamPersonalityTeacher: {
                        pioneer: 6,
                        guardian: 4,
                        driver: 7,
                        integrator: 1
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
                        visual: 2,
                        kinaesthetic: 7,
                        aural: 6,
                        social: 1,
                        solitary: 6,
                        verbal: 7,
                        logical: 8
                    },
                    typesOfIntelligence: {
                        naturalist: 6,
                        musical: 8,
                        logical_mathematical: 5,
                        existential: 9,
                        interpersonal: 7,
                        bodily_kinesthetic: 5,
                        linguistic: 3,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 6, 
                        driver: 9,
                        integrator: 2
                    }, 
                    learningTypesStudent: {
                        visual: 5,
                        kinaesthetic: 8,
                        aural: 6,
                        social: 7,
                        solitary: 4,
                        verbal: 5,
                        logical: 7
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 7,
                        musical: 5,
                        logical_mathematical: 9,
                        existential: 6,
                        interpersonal: 3,
                        bodily_kinesthetic: 8,
                        linguistic: 6,
                        intrapersonal: 4
                    },
                    teamPersonalityStudent: {
                        pioneer: 5,
                        guardian: 9,
                        driver: 4,
                        integrator: 7
                    },
                    learningTypesTeacher: {
                        visual: 5,
                        kinaesthetic: 4,
                        aural: 9,
                        social: 6,
                        solitary: 2,
                        verbal: 8,
                        logical: 3
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 7,
                        musical: 1,
                        logical_mathematical: 6,
                        existential: 9,
                        interpersonal: 5,
                        bodily_kinesthetic: 3,
                        linguistic: 2,
                        intrapersonal: 4
                    },
                    teamPersonalityTeacher: {
                        pioneer: 8,
                        guardian: 4,
                        driver: 1,
                        integrator: 10
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
                        visual: 7,
                        kinaesthetic: 6,
                        aural: 3,
                        social: 3,
                        solitary: 6,
                        verbal: 6,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 6,
                        musical: 8,
                        logical_mathematical: 7,
                        existential: 8,
                        interpersonal: 7,
                        bodily_kinesthetic: 7,
                        linguistic: 8,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 7, 
                        driver: 8,
                        integrator: 3
                    }, 
                    learningTypesStudent: {
                        visual: 6,
                        kinaesthetic: 7,
                        aural: 4,
                        social: 8,
                        solitary: 5,
                        verbal: 6,
                        logical: 9
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 8,
                        musical: 6,
                        logical_mathematical: 5,
                        existential: 9,
                        interpersonal: 3,
                        bodily_kinesthetic: 7,
                        linguistic: 4,
                        intrapersonal: 5
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 6,
                        driver: 4,
                        integrator: 9
                    },
                    learningTypesTeacher: {
                        visual: 9,
                        kinaesthetic: 3,
                        aural: 7,
                        social: 1,
                        solitary: 6,
                        verbal: 8,
                        logical: 4
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 5,
                        musical: 8,
                        logical_mathematical: 6,
                        existential: 4,
                        interpersonal: 9,
                        bodily_kinesthetic: 2,
                        linguistic: 1,
                        intrapersonal: 3
                    },
                    teamPersonalityTeacher: {
                        pioneer: 7,
                        guardian: 3,
                        driver: 2,
                        integrator: 10
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
                        visual: 6,
                        kinaesthetic: 4,
                        aural: 2,
                        social: 7,
                        solitary: 8,
                        verbal: 7,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 2,
                        musical: 8,
                        logical_mathematical: 71,
                        existential: 9,
                        interpersonal: 7,
                        bodily_kinesthetic: 3,
                        linguistic: 8,
                        intrapersonal: 9
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 2, 
                        driver: 1,
                        integrator: 6
                    }, 
                    learningTypesStudent: {
                        visual: 4,
                        kinaesthetic: 8,
                        aural: 6,
                        social: 7,
                        solitary: 5,
                        verbal: 4,
                        logical: 6
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 7,
                        logical_mathematical: 5,
                        existential: 6,
                        interpersonal: 4,
                        bodily_kinesthetic: 8,
                        linguistic: 4,
                        intrapersonal: 9
                    },
                    teamPersonalityStudent: {
                        pioneer: 8,
                        guardian: 7,
                        driver: 6,
                        integrator: 5
                    },
                    learningTypesTeacher: {
                        visual: 7,
                        kinaesthetic: 9,
                        aural: 5,
                        social: 6,
                        solitary: 8,
                        verbal: 2,
                        logical: 4
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 3,
                        musical: 7,
                        logical_mathematical: 9,
                        existential: 5,
                        interpersonal: 6,
                        bodily_kinesthetic: 8,
                        linguistic: 2,
                        intrapersonal: 4
                    },
                    teamPersonalityTeacher: {
                        pioneer: 6,
                        guardian: 8,
                        driver: 4,
                        integrator: 5
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
                        visual: 4,
                        kinaesthetic: 6,
                        aural: 4,
                        social: 9,
                        solitary: 7,
                        verbal: 7,
                        logical: 4
                    },
                    typesOfIntelligence: {
                        naturalist: 6,
                        musical: 5,
                        logical_mathematical: 7,
                        existential: 9,
                        interpersonal: 7,
                        bodily_kinesthetic: 8,
                        linguistic: 7,
                        intrapersonal: 1
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 7, 
                        driver: 2,
                        integrator: 6
                    }, 
                    learningTypesStudent: {
                        visual: 4,
                        kinaesthetic: 8,
                        aural: 6,
                        social: 7,
                        solitary: 5,
                        verbal: 4,
                        logical: 6
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 7,
                        logical_mathematical: 5,
                        existential: 6,
                        interpersonal: 4,
                        bodily_kinesthetic: 8,
                        linguistic: 4,
                        intrapersonal: 9
                    },
                    teamPersonalityStudent: {
                        pioneer: 8,
                        guardian: 7,
                        driver: 6,
                        integrator: 5
                    },
                    learningTypesTeacher: {
                        visual: 6,
                        kinaesthetic: 5,
                        aural: 3,
                        social: 5,
                        solitary: 3,
                        verbal: 9,
                        logical: 4
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 2,
                        musical: 5,
                        logical_mathematical: 9,
                        existential: 3,
                        interpersonal: 9,
                        bodily_kinesthetic: 7,
                        linguistic: 3,
                        intrapersonal: 8
                    },
                    teamPersonalityTeacher: {
                        pioneer: 3,
                        guardian: 5,
                        driver: 2,
                        integrator: 1
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
                        visual: 7,
                        kinaesthetic: 6,
                        aural: 1,
                        social: 2,
                        solitary: 6,
                        verbal: 6,
                        logical: 9
                    },
                    typesOfIntelligence: {
                        naturalist: 6,
                        musical: 8,
                        logical_mathematical: 7,
                        existential: 5,
                        interpersonal: 5,
                        bodily_kinesthetic: 8,
                        linguistic: 5,
                        intrapersonal: 8
                    },
                    teamPersonality: {
                        pioneer: 6, 
                        guardian: 7, 
                        driver: 8,
                        integrator: 7
                    }, 
                    learningTypesStudent: {
                        visual: 6,
                        kinaesthetic: 5,
                        aural: 4,
                        social: 7,
                        solitary: 8,
                        verbal: 3,
                        logical: 7
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 5,
                        logical_mathematical: 7,
                        existential: 6,
                        interpersonal: 7,
                        bodily_kinesthetic: 6,
                        linguistic: 5,
                        intrapersonal: 8
                    },
                    teamPersonalityStudent: {
                        pioneer: 4,
                        guardian: 7,
                        driver: 6,
                        integrator: 8
                    },
                    learningTypesTeacher: {
                        visual: 4,
                        kinaesthetic: 6,
                        aural: 5,
                        social: 4,
                        solitary: 3,
                        verbal: 2,
                        logical: 8
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 3,
                        musical: 9,
                        logical_mathematical: 4,
                        existential: 3,
                        interpersonal: 8,
                        bodily_kinesthetic: 3,
                        linguistic: 7,
                        intrapersonal: 3
                    },
                    teamPersonalityTeacher: {
                        pioneer: 4,
                        guardian: 7,
                        driver: 9,
                        integrator: 1
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
                        visual: 5,
                        kinaesthetic: 3,
                        aural: 8,
                        social: 7,
                        solitary: 3,
                        verbal: 3,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 5,
                        musical: 8,
                        logical_mathematical: 7,
                        existential: 5,
                        interpersonal: 6,
                        bodily_kinesthetic: 2,
                        linguistic: 3,
                        intrapersonal: 4
                    },
                    teamPersonality: {
                        pioneer: 6, 
                        guardian: 2, 
                        driver: 7,
                        integrator: 6
                    }, 
                    learningTypesStudent: {
                        visual: 8,
                        kinaesthetic: 6,
                        aural: 5,
                        social: 4,
                        solitary: 7,
                        verbal: 4,
                        logical: 6
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 4,
                        logical_mathematical: 6,
                        existential: 8,
                        interpersonal: 6,
                        bodily_kinesthetic: 7,
                        linguistic: 7,
                        intrapersonal: 5
                    },
                    teamPersonalityStudent: {
                        pioneer: 6,
                        guardian: 8,
                        driver: 5,
                        integrator: 6
                    },
                    learningTypesTeacher: {
                        visual: 4,
                        kinaesthetic: 3,
                        aural: 7,
                        social: 8,
                        solitary: 5,
                        verbal: 6,
                        logical: 1
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 4,
                        musical: 2,
                        logical_mathematical: 3,
                        existential: 9,
                        interpersonal: 2,
                        bodily_kinesthetic: 6,
                        linguistic: 4,
                        intrapersonal: 2
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 3,
                        driver: 8,
                        integrator: 2
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
                        visual: 8,
                        kinaesthetic: 7,
                        aural: 8,
                        social: 5,
                        solitary: 7,
                        verbal: 2,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 7,
                        musical: 5,
                        logical_mathematical: 8,
                        existential: 4,
                        interpersonal: 7,
                        bodily_kinesthetic: 6,
                        linguistic: 6,
                        intrapersonal: 4
                    },
                    teamPersonality: {
                        pioneer: 6, 
                        guardian: 4, 
                        driver: 7,
                        integrator: 3
                    }, 
                    learningTypesStudent: {
                        visual: 7,
                        kinaesthetic: 8,
                        aural: 6,
                        social: 5,
                        solitary: 5,
                        verbal: 5,
                        logical: 4
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 5,
                        musical: 7,
                        logical_mathematical: 5,
                        existential: 6,
                        interpersonal: 7,
                        bodily_kinesthetic: 8,
                        linguistic: 4,
                        intrapersonal: 6
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 6,
                        driver: 5,
                        integrator: 8
                    },
                    learningTypesTeacher: {
                        visual: 4,
                        kinaesthetic: 8,
                        aural: 6,
                        social: 8,
                        solitary: 2,
                        verbal: 1,
                        logical: 7
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 3,
                        musical: 4,
                        logical_mathematical: 8,
                        existential: 4,
                        interpersonal: 9,
                        bodily_kinesthetic: 5,
                        linguistic: 1,
                        intrapersonal: 3
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 3,
                        driver: 3,
                        integrator: 5
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
                        visual: 6,
                        kinaesthetic: 8,
                        aural: 6,
                        social: 1,
                        solitary: 3,
                        verbal: 3,
                        logical: 5
                    },
                    typesOfIntelligence: {
                        naturalist: 2,
                        musical: 6,
                        logical_mathematical: 7,
                        existential: 9,
                        interpersonal: 4,
                        bodily_kinesthetic: 2,
                        linguistic: 8,
                        intrapersonal: 2
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 1, 
                        driver: 5,
                        integrator: 9
                    }, 
                    learningTypesStudent: {
                        visual: 6,
                        kinaesthetic: 4,
                        aural: 9,
                        social: 2,
                        solitary: 7,
                        verbal: 8,
                        logical: 1
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 3,
                        musical: 6,
                        logical_mathematical: 4,
                        existential: 9,
                        interpersonal: 5,
                        bodily_kinesthetic: 7,
                        linguistic: 2,
                        intrapersonal: 8
                    },
                    teamPersonalityStudent: {
                        pioneer: 7,
                        guardian: 5,
                        driver: 8,
                        integrator: 2
                    },
                    learningTypesTeacher: {
                        visual: 5,
                        kinaesthetic: 4,
                        aural: 3,
                        social: 7,
                        solitary: 1,
                        verbal: 8,
                        logical: 2
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 2,
                        musical: 8,
                        logical_mathematical: 7,
                        existential: 9,
                        interpersonal: 2,
                        bodily_kinesthetic: 6,
                        linguistic: 1,
                        intrapersonal: 9
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 8,
                        driver: 3,
                        integrator: 6
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
                        visual: 2,
                        kinaesthetic: 6,
                        aural: 8,
                        social: 4,
                        solitary: 9,
                        verbal: 8,
                        logical: 9
                    },
                    typesOfIntelligence: {
                        naturalist: 8,
                        musical: 6,
                        logical_mathematical: 9,
                        existential: 8,
                        interpersonal: 3,
                        bodily_kinesthetic: 2,
                        linguistic: 7,
                        intrapersonal: 5
                    },
                    teamPersonality: {
                        pioneer: 7, 
                        guardian: 9, 
                        driver: 9,
                        integrator: 5
                    }, 
                    learningTypesStudent: {
                        visual: 8,
                        kinaesthetic: 5,
                        aural: 3,
                        social: 7,
                        solitary: 4,
                        verbal: 6,
                        logical: 2
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 6,
                        musical: 4,
                        logical_mathematical: 7,
                        existential: 2,
                        interpersonal: 9,
                        bodily_kinesthetic: 5,
                        linguistic: 8,
                        intrapersonal: 3
                    },
                    teamPersonalityStudent: {
                        pioneer: 4,
                        guardian: 8,
                        driver: 6,
                        integrator: 7
                    },
                    learningTypesTeacher: {
                        visual: 7,
                        kinaesthetic: 3,
                        aural: 5,
                        social: 8,
                        solitary: 5,
                        verbal: 3,
                        logical: 5
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 3,
                        musical: 8,
                        logical_mathematical: 4,
                        existential: 7,
                        interpersonal: 4,
                        bodily_kinesthetic: 8,
                        linguistic: 6,
                        intrapersonal: 3
                    },
                    teamPersonalityTeacher: {
                        pioneer: 4,
                        guardian: 2,
                        driver: 6,
                        integrator: 1
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
                        visual: 5,
                        kinaesthetic: 8,
                        aural: 4,
                        social: 7,
                        solitary: 6,
                        verbal: 9,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 7,
                        musical: 6,
                        logical_mathematical: 8,
                        existential: 5,
                        interpersonal: 2,
                        bodily_kinesthetic: 8,
                        linguistic: 5,
                        intrapersonal: 4
                    },
                    teamPersonality: {
                        pioneer: 2, 
                        guardian: 8, 
                        driver: 7,
                        integrator: 1
                    }, learningTypesStudent: {
                        visual: 4,
                        kinaesthetic: 6,
                        aural: 8,
                        social: 1,
                        solitary: 9,
                        verbal: 2,
                        logical: 7
                        },
                        typesOfIntelligenceStudent: {
                        naturalist: 5,
                        musical: 9,
                        logical_mathematical: 3,
                        existential: 4,
                        interpersonal: 7,
                        bodily_kinesthetic: 8,
                        linguistic: 6,
                        intrapersonal: 2
                    },
                    teamPersonalityStudent: {
                        pioneer: 8,
                        guardian: 7,
                        driver: 5,
                        integrator: 1
                    },
                    learningTypesTeacher: {
                        visual: 5,
                        kinaesthetic: 5,
                        aural: 4,
                        social: 3,
                        solitary: 9,
                        verbal: 6,
                        logical: 2
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 8,
                        musical: 5,
                        logical_mathematical: 3,
                        existential: 7,
                        interpersonal: 4,
                        bodily_kinesthetic: 6,
                        linguistic: 2,
                        intrapersonal: 6
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 3,
                        driver: 8,
                        integrator: 4
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
                        visual: 2,
                        kinaesthetic: 6,
                        aural: 5,
                        social: 2,
                        solitary: 7,
                        verbal: 8,
                        logical: 7
                    },
                    typesOfIntelligence: {
                        naturalist: 3,
                        musical: 5,
                        logical_mathematical: 7,
                        existential: 8,
                        interpersonal: 9,
                        bodily_kinesthetic: 5,
                        linguistic: 6,
                        intrapersonal: 2
                    },
                    teamPersonality: {
                        pioneer: 8, 
                        guardian: 5, 
                        driver: 2,
                        integrator: 8
                    }, 
                    learningTypesStudent: {
                        visual: 2,
                        kinaesthetic: 9,
                        aural: 4,
                        social: 6,
                        solitary: 5,
                        verbal: 1,
                        logical: 8
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 7,
                        musical: 3,
                        logical_mathematical: 5,
                        existential: 2,
                        interpersonal: 6,
                        bodily_kinesthetic: 4,
                        linguistic: 9,
                        intrapersonal: 8
                    },
                    teamPersonalityStudent: {
                        pioneer: 6,
                        guardian: 8,
                        driver: 3,
                        integrator: 4
                    },
                    learningTypesTeacher: {
                        visual: 7,
                        kinaesthetic: 3,
                        aural: 6,
                        social: 9,
                        solitary: 1,
                        verbal: 4,
                        logical: 2
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 4,
                        musical: 3,
                        logical_mathematical: 7,
                        existential: 7,
                        interpersonal: 4,
                        bodily_kinesthetic: 3,
                        linguistic: 1,
                        intrapersonal: 3
                    },
                    teamPersonalityTeacher: {
                        pioneer: 5,
                        guardian: 3,
                        driver: 8,
                        integrator: 3
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
                        visual: 3,
                        kinaesthetic: 5,
                        aural: 5,
                        social: 8,
                        solitary: 7,
                        verbal: 5,
                        logical: 5
                    },
                    typesOfIntelligence: {
                        naturalist: 6,
                        musical: 7,
                        logical_mathematical: 6,
                        existential: 8,
                        interpersonal: 4,
                        bodily_kinesthetic: 2,
                        linguistic: 6,
                        intrapersonal: 3
                    },
                    teamPersonality: {
                        pioneer: 4, 
                        guardian: 7, 
                        driver: 6,
                        integrator: 5
                    }, 
                    learningTypesStudent: {
                        visual: 2,
                        kinaesthetic: 9,
                        aural: 4,
                        social: 6,
                        solitary: 5,
                        verbal: 1,
                        logical: 8
                    },
                    typesOfIntelligenceStudent: {
                        naturalist: 7,
                        musical: 3,
                        logical_mathematical: 5,
                        existential: 2,
                        interpersonal: 6,
                        bodily_kinesthetic: 4,
                        linguistic: 9,
                        intrapersonal: 8
                    },
                    teamPersonalityStudent: {
                        pioneer: 6,
                        guardian: 8,
                        driver: 3,
                        integrator: 4
                    },
                    learningTypesTeacher: {
                        visual: 5,
                        kinaesthetic: 7,
                        aural: 3,
                        social: 9,
                        solitary: 2,
                        verbal: 4,
                        logical: 6
                    },
                    typesOfIntelligenceTeacher: {
                        naturalist: 4,
                        musical: 3,
                        logical_mathematical: 7,
                        existential: 3,
                        interpersonal: 3,
                        bodily_kinesthetic: 7,
                        linguistic: 8,
                        intrapersonal: 1
                    },
                    teamPersonalityTeacher: {
                        pioneer: 3,
                        guardian: 9,
                        driver: 3,
                        integrator: 7
                    }
                }
                
                        
            ]
        }
    }, 
    methods:{
        navclick(pageName){
            console.log("Button Click:" + pageName)
            this.page = pageName
        },
        studentAverages(student){              
            avgData = {
                learning: {
                    visual: (this.studentList[student].learningTypes.visual + this.studentList[student].learningTypesStudent.visual + this.studentList[student].learningTypesTeacher.visual)/3,
                    kinaesthetic: (this.studentList[student].learningTypes.kinaesthetic + this.studentList[student].learningTypesStudent.kinaesthetic + this.studentList[student].learningTypesTeacher.kinaesthetic)/3,
                    aural: (this.studentList[student].learningTypes.aural + this.studentList[student].learningTypesStudent.aural + this.studentList[student].learningTypesTeacher.aural)/3,
                    social: (this.studentList[student].learningTypes.social + this.studentList[student].learningTypesStudent.social + this.studentList[student].learningTypesTeacher.social)/3,
                    solitary: (this.studentList[student].learningTypes.solitary + this.studentList[student].learningTypesStudent.solitary + this.studentList[student].learningTypesTeacher.solitary)/3,
                    verbal: (this.studentList[student].learningTypes.verbal + this.studentList[student].learningTypesStudent.verbal + this.studentList[student].learningTypesTeacher.verbal)/3,
                    logical: (this.studentList[student].learningTypes.logical + this.studentList[student].learningTypesStudent.logical + this.studentList[student].learningTypesTeacher.logical)/3,
                },
                intelligence: {
                    naturalist: (this.studentList[student].typesOfIntelligence.naturalist + this.studentList[student].typesOfIntelligenceStudent.naturalist + this.studentList[student].typesOfIntelligenceTeacher.naturalist)/3,
                    musical: (this.studentList[student].typesOfIntelligence.musical + this.studentList[student].typesOfIntelligenceStudent.naturalist + this.studentList[student].typesOfIntelligenceTeacher.naturalist)/3,
                    logical_mathematical: (this.studentList[student].typesOfIntelligence.logical_mathematical + this.studentList[student].typesOfIntelligenceStudent.logical_mathematical + this.studentList[student].typesOfIntelligenceTeacher.logical_mathematical)/3,
                    existential: (this.studentList[student].typesOfIntelligence.existential + this.studentList[student].typesOfIntelligenceStudent.existential + this.studentList[student].typesOfIntelligenceTeacher.existential)/3,
                    interpersonal: (this.studentList[student].typesOfIntelligence.interpersonal + this.studentList[student].typesOfIntelligenceStudent.interpersonal + this.studentList[student].typesOfIntelligenceTeacher.interpersonal)/3,
                    bodily_kinesthetic: (this.studentList[student].typesOfIntelligence.bodily_kinesthetic + this.studentList[student].typesOfIntelligenceStudent.bodily_kinesthetic + this.studentList[student].typesOfIntelligenceTeacher.bodily_kinesthetic)/3,
                    linguistic: (this.studentList[student].typesOfIntelligence.linguistic + this.studentList[student].typesOfIntelligenceStudent.linguistic + this.studentList[student].typesOfIntelligenceTeacher.linguistic)/3,
                    intrapersonal: (this.studentList[student].typesOfIntelligence.intrapersonal + this.studentList[student].typesOfIntelligenceStudent.intrapersonal + this.studentList[student].typesOfIntelligenceTeacher.intrapersonal)/3
                },
                team: {
                    pioneer: (this.studentList[student].teamPersonality.pioneer + this.studentList[student].teamPersonalityStudent.pioneer + this.studentList[student].teamPersonalityTeacher.pioneer)/3, 
                    guardian: (this.studentList[student].teamPersonality.guardian + this.studentList[student].teamPersonalityStudent.guardian + this.studentList[student].teamPersonalityTeacher.guardian)/3, 
                    driver: (this.studentList[student].teamPersonality.driver + this.studentList[student].teamPersonalityStudent.driver + this.studentList[student].teamPersonalityTeacher.driver)/3,
                    integrator: (this.studentList[student].teamPersonality.integrator + this.studentList[student].teamPersonalityStudent.integrator + this.studentList[student].teamPersonalityTeacher.integrator)/3
                }}
            window.mitt.emit('Student data', avgData)
            console.log("mitt sent!")
            }
            
        }
    }
})