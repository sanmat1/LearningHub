const workEnergyChapter = {
    id: "work-energy",
    title: "Work and Energy",
    sections: [
        {
            id: "intro",
            title: "Introduction to Work and Energy",
            type: "teaching",
            content: `
                <h2>What is Work in Physics?</h2>
                <p>In everyday language, we use "work" to describe many activities. However, in physics, <strong>work</strong> has a very specific meaning. Work is done when a force causes an object to move in the direction of the force.</p>
                
                <div class="key-concept">
                    <h4>🎯 Key Concept: Work</h4>
                    <p>Work is the transfer of energy that occurs when a force moves an object through a distance.</p>
                    <p><strong>Three conditions must be met for work to be done:</strong></p>
                    <ul>
                        <li>A force must be applied</li>
                        <li>The object must move</li>
                        <li>The movement must be in the direction of the force</li>
                    </ul>
                </div>

                <h3>The Formula for Work</h3>
                <div class="formula">
                    W = F × d × cos(θ)
                </div>
                <p>Where:</p>
                <ul>
                    <li><strong>W</strong> = Work (measured in Joules, J)</li>
                    <li><strong>F</strong> = Force applied (measured in Newtons, N)</li>
                    <li><strong>d</strong> = Distance moved (measured in meters, m)</li>
                    <li><strong>θ</strong> = Angle between the force and the direction of motion</li>
                </ul>

                <p>When the force is in the same direction as the motion (θ = 0°), the formula simplifies to:</p>
                <div class="formula">
                    W = F × d
                </div>

                <div class="example-box">
                    <h4>📝 Example 1: Pushing a Box</h4>
                    <p><strong>Problem:</strong> You push a box with a force of 50 N across a floor for 10 meters. How much work do you do?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Given: F = 50 N, d = 10 m</p>
                    <p>W = F × d = 50 N × 10 m = 500 J</p>
                    <p><strong>Answer:</strong> You do 500 Joules of work on the box.</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 2: Lifting a Book</h4>
                    <p><strong>Problem:</strong> You lift a 2 kg book from the floor to a shelf 1.5 m high. How much work do you do? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>First, find the force needed: F = m × g = 2 kg × 10 m/s² = 20 N</p>
                    <p>Then calculate work: W = F × d = 20 N × 1.5 m = 30 J</p>
                    <p><strong>Answer:</strong> You do 30 Joules of work lifting the book.</p>
                </div>

                <h3>When is NO Work Done?</h3>
                <p>Understanding when work is NOT done is just as important:</p>
                <ul>
                    <li><strong>Carrying a book while walking horizontally:</strong> The force (upward) is perpendicular to the motion (horizontal), so no work is done on the book by your hand.</li>
                    <li><strong>Pushing against a wall:</strong> If the wall doesn't move, no displacement occurs, so no work is done.</li>
                    <li><strong>Circular motion with centripetal force:</strong> The force is always perpendicular to the motion, so no work is done.</li>
                </ul>

                <div class="key-concept">
                    <h4>💡 Important Note</h4>
                    <p>Work can be positive or negative:</p>
                    <ul>
                        <li><strong>Positive work:</strong> When force and motion are in the same direction (energy is added to the system)</li>
                        <li><strong>Negative work:</strong> When force opposes motion (energy is removed from the system, like friction)</li>
                    </ul>
                </div>
            `
        },
        {
            id: "energy-types",
            title: "Types of Energy",
            type: "teaching",
            content: `
                <h2>Understanding Energy</h2>
                <p>Energy is the ability to do work. It comes in many forms, but in physics we focus on two main types: kinetic energy and potential energy.</p>

                <h3>Kinetic Energy (KE)</h3>
                <p>Kinetic energy is the energy an object has due to its motion. Any moving object has kinetic energy.</p>
                
                <div class="formula">
                    KE = ½mv²
                </div>
                <p>Where:</p>
                <ul>
                    <li><strong>KE</strong> = Kinetic Energy (Joules, J)</li>
                    <li><strong>m</strong> = mass (kilograms, kg)</li>
                    <li><strong>v</strong> = velocity (meters per second, m/s)</li>
                </ul>

                <div class="key-concept">
                    <h4>🔍 Important Observation</h4>
                    <p>Notice that kinetic energy depends on velocity <strong>squared</strong>. This means:</p>
                    <ul>
                        <li>If you double the speed, kinetic energy increases by 4 times (2² = 4)</li>
                        <li>If you triple the speed, kinetic energy increases by 9 times (3² = 9)</li>
                    </ul>
                    <p>This is why car accidents at high speeds are so much more dangerous!</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 3: Calculating Kinetic Energy</h4>
                    <p><strong>Problem:</strong> A 1000 kg car is traveling at 20 m/s. What is its kinetic energy?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Given: m = 1000 kg, v = 20 m/s</p>
                    <p>KE = ½mv² = ½ × 1000 kg × (20 m/s)² = ½ × 1000 × 400 = 200,000 J = 200 kJ</p>
                    <p><strong>Answer:</strong> The car has 200,000 Joules or 200 kilojoules of kinetic energy.</p>
                </div>

                <h3>Gravitational Potential Energy (PE)</h3>
                <p>Gravitational potential energy is the energy an object has due to its position above the ground. The higher an object is, the more potential energy it has.</p>
                
                <div class="formula">
                    PE = mgh
                </div>
                <p>Where:</p>
                <ul>
                    <li><strong>PE</strong> = Potential Energy (Joules, J)</li>
                    <li><strong>m</strong> = mass (kilograms, kg)</li>
                    <li><strong>g</strong> = gravitational acceleration (9.8 m/s² on Earth, often approximated as 10 m/s²)</li>
                    <li><strong>h</strong> = height above reference point (meters, m)</li>
                </ul>

                <div class="example-box">
                    <h4>📝 Example 4: Calculating Potential Energy</h4>
                    <p><strong>Problem:</strong> A 5 kg book is placed on a shelf 2 meters above the ground. What is its potential energy? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>Given: m = 5 kg, g = 10 m/s², h = 2 m</p>
                    <p>PE = mgh = 5 kg × 10 m/s² × 2 m = 100 J</p>
                    <p><strong>Answer:</strong> The book has 100 Joules of gravitational potential energy.</p>
                </div>

                <h3>Elastic Potential Energy</h3>
                <p>Elastic potential energy is stored in objects that can be stretched or compressed, like springs, rubber bands, or trampolines.</p>
                
                <div class="formula">
                    PE_elastic = ½kx²
                </div>
                <p>Where:</p>
                <ul>
                    <li><strong>PE_elastic</strong> = Elastic Potential Energy (Joules, J)</li>
                    <li><strong>k</strong> = spring constant (N/m) - a measure of spring stiffness</li>
                    <li><strong>x</strong> = displacement from equilibrium position (meters, m)</li>
                </ul>

                <div class="key-concept">
                    <h4>🎯 Real-World Applications</h4>
                    <ul>
                        <li><strong>Kinetic Energy:</strong> Wind turbines, moving vehicles, flowing water in hydroelectric dams</li>
                        <li><strong>Gravitational PE:</strong> Roller coasters, water towers, hydroelectric dams</li>
                        <li><strong>Elastic PE:</strong> Bow and arrow, pogo sticks, car suspension systems</li>
                    </ul>
                </div>
            `
        },
        {
            id: "conservation",
            title: "Conservation of Energy",
            type: "teaching",
            content: `
                <h2>The Law of Conservation of Energy</h2>
                
                <div class="key-concept">
                    <h4>⚡ The Most Important Law in Physics</h4>
                    <p><strong>Energy cannot be created or destroyed; it can only be transformed from one form to another.</strong></p>
                    <p>The total energy in a closed system remains constant.</p>
                </div>

                <h3>Energy Transformations</h3>
                <p>Energy constantly changes from one form to another, but the total amount stays the same. Here are common transformations:</p>

                <ul>
                    <li><strong>Falling object:</strong> Potential Energy → Kinetic Energy</li>
                    <li><strong>Swinging pendulum:</strong> PE ↔ KE (back and forth)</li>
                    <li><strong>Stretched spring:</strong> Elastic PE → Kinetic Energy</li>
                    <li><strong>Light bulb:</strong> Electrical Energy → Light + Heat</li>
                </ul>

                <h3>Mechanical Energy</h3>
                <p>Mechanical energy is the sum of kinetic and potential energy in a system:</p>
                
                <div class="formula">
                    E_mechanical = KE + PE
                </div>

                <p>In an ideal system (no friction or air resistance), mechanical energy is conserved:</p>
                
                <div class="formula">
                    E_initial = E_final<br>
                    KE_i + PE_i = KE_f + PE_f
                </div>

                <div class="example-box">
                    <h4>📝 Example 5: Falling Ball</h4>
                    <p><strong>Problem:</strong> A 2 kg ball is dropped from a height of 5 m. What is its speed just before it hits the ground? (Ignore air resistance, use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Find initial energy (at top)</p>
                    <p>KE_i = 0 (ball starts from rest)</p>
                    <p>PE_i = mgh = 2 kg × 10 m/s² × 5 m = 100 J</p>
                    <p>E_initial = 0 + 100 = 100 J</p>
                    
                    <p><strong>Step 2:</strong> Find final energy (just before hitting ground)</p>
                    <p>PE_f = 0 (height = 0)</p>
                    <p>KE_f = ? (this is what we need to find)</p>
                    <p>E_final = KE_f + 0 = KE_f</p>
                    
                    <p><strong>Step 3:</strong> Apply conservation of energy</p>
                    <p>E_initial = E_final</p>
                    <p>100 J = KE_f</p>
                    <p>100 J = ½mv²</p>
                    <p>100 = ½ × 2 × v²</p>
                    <p>100 = v²</p>
                    <p>v = 10 m/s</p>
                    
                    <p><strong>Answer:</strong> The ball is traveling at 10 m/s just before impact.</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 6: Pendulum Swing</h4>
                    <p><strong>Problem:</strong> A pendulum bob with mass 0.5 kg is pulled to one side so it's 0.3 m above its lowest point. What is its maximum speed as it swings through the lowest point? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>At highest point: All PE, no KE</p>
                    <p>PE = mgh = 0.5 kg × 10 m/s² × 0.3 m = 1.5 J</p>
                    
                    <p>At lowest point: All KE, no PE</p>
                    <p>KE = PE (by conservation)</p>
                    <p>½mv² = 1.5 J</p>
                    <p>½ × 0.5 × v² = 1.5</p>
                    <p>0.25v² = 1.5</p>
                    <p>v² = 6</p>
                    <p>v = 2.45 m/s</p>
                    
                    <p><strong>Answer:</strong> The maximum speed is approximately 2.45 m/s.</p>
                </div>

                <h3>Energy and Friction</h3>
                <p>In real-world situations, friction converts mechanical energy into thermal energy (heat). This means mechanical energy is NOT conserved, but total energy still is!</p>

                <div class="key-concept">
                    <h4>💡 With Friction</h4>
                    <p>E_initial = E_final + Energy lost to friction</p>
                    <p>Or: E_initial - Energy lost to friction = E_final</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 7: Sliding with Friction</h4>
                    <p><strong>Problem:</strong> A 10 kg box slides down a 4 m high ramp. At the bottom, its speed is 6 m/s. How much energy was lost to friction? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>Initial energy (at top): E_i = PE = mgh = 10 × 10 × 4 = 400 J</p>
                    <p>Final energy (at bottom): E_f = KE = ½mv² = ½ × 10 × 36 = 180 J</p>
                    <p>Energy lost = E_i - E_f = 400 - 180 = 220 J</p>
                    <p><strong>Answer:</strong> 220 Joules were lost to friction.</p>
                </div>
            `
        },
        {
            id: "power",
            title: "Power",
            type: "teaching",
            content: `
                <h2>What is Power?</h2>
                <p>Power is the rate at which work is done or energy is transferred. It tells us how quickly energy is used or converted.</p>

                <div class="formula">
                    P = W / t  or  P = E / t
                </div>
                <p>Where:</p>
                <ul>
                    <li><strong>P</strong> = Power (Watts, W)</li>
                    <li><strong>W</strong> = Work done (Joules, J)</li>
                    <li><strong>E</strong> = Energy transferred (Joules, J)</li>
                    <li><strong>t</strong> = time (seconds, s)</li>
                </ul>

                <div class="key-concept">
                    <h4>🔌 Units of Power</h4>
                    <p>1 Watt = 1 Joule per second (1 W = 1 J/s)</p>
                    <p>Common units:</p>
                    <ul>
                        <li>Watt (W)</li>
                        <li>Kilowatt (kW) = 1000 W</li>
                        <li>Megawatt (MW) = 1,000,000 W</li>
                        <li>Horsepower (hp) = 746 W</li>
                    </ul>
                </div>

                <div class="example-box">
                    <h4>📝 Example 8: Light Bulb Power</h4>
                    <p><strong>Problem:</strong> A 60 W light bulb is left on for 5 hours. How much energy does it use?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Given: P = 60 W, t = 5 hours = 5 × 3600 = 18,000 seconds</p>
                    <p>Rearrange P = E/t to get: E = P × t</p>
                    <p>E = 60 W × 18,000 s = 1,080,000 J = 1,080 kJ</p>
                    <p><strong>Answer:</strong> The bulb uses 1,080 kilojoules of energy.</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 9: Running Up Stairs</h4>
                    <p><strong>Problem:</strong> A 60 kg student runs up a flight of stairs 3 m high in 2 seconds. What is their power output? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>First, find the work done:</p>
                    <p>W = Force × distance = (mg) × h = (60 × 10) × 3 = 1,800 J</p>
                    <p>Then calculate power:</p>
                    <p>P = W / t = 1,800 J / 2 s = 900 W</p>
                    <p><strong>Answer:</strong> The student's power output is 900 Watts.</p>
                </div>

                <h3>Comparing Power</h3>
                <p>Two people can do the same amount of work, but if one does it faster, they have greater power.</p>

                <div class="example-box">
                    <h4>📝 Example 10: Comparing Two Engines</h4>
                    <p><strong>Situation:</strong> Two cars need to climb a hill that requires 500,000 J of work.</p>
                    <ul>
                        <li>Car A (with a 50 kW engine) takes 10 seconds</li>
                        <li>Car B (with a 25 kW engine) takes 20 seconds</li>
                    </ul>
                    <p><strong>Analysis:</strong></p>
                    <p>Car A: P = 500,000 J / 10 s = 50,000 W = 50 kW ✓</p>
                    <p>Car B: P = 500,000 J / 20 s = 25,000 W = 25 kW ✓</p>
                    <p>Both cars do the same work, but Car A is more powerful because it does it in less time.</p>
                </div>

                <div class="key-concept">
                    <h4>🏃 Real-World Power Examples</h4>
                    <ul>
                        <li><strong>Human body (resting):</strong> ~100 W</li>
                        <li><strong>Light bulb:</strong> 5-100 W</li>
                        <li><strong>Microwave:</strong> 1,000 W (1 kW)</li>
                        <li><strong>Car engine:</strong> 50,000-300,000 W (50-300 kW)</li>
                        <li><strong>Power plant:</strong> 500,000,000 W (500 MW)</li>
                    </ul>
                </div>
            `
        },
        {
            id: "quiz",
            title: "Practice Quiz",
            type: "quiz",
            questions: [
                {
                    question: "A person pushes a 20 kg box with a force of 100 N across a floor for 5 meters. How much work is done?",
                    options: [
                        "100 J",
                        "200 J",
                        "500 J",
                        "1000 J"
                    ],
                    correct: 2,
                    explanation: "Work = Force × Distance = 100 N × 5 m = 500 J. The mass of the box doesn't affect the work calculation directly; we only need the applied force and distance."
                },
                {
                    question: "A 1000 kg car is traveling at 20 m/s. What is its kinetic energy?",
                    options: [
                        "10,000 J",
                        "20,000 J",
                        "200,000 J",
                        "400,000 J"
                    ],
                    correct: 2,
                    explanation: "KE = ½mv² = ½ × 1000 kg × (20 m/s)² = ½ × 1000 × 400 = 200,000 J"
                },
                {
                    question: "Which of the following situations involves NO work being done?",
                    options: [
                        "Lifting a book from the floor to a table",
                        "Pushing a box across the floor",
                        "Carrying a suitcase while walking horizontally",
                        "Pulling a sled up a hill"
                    ],
                    correct: 2,
                    explanation: "When carrying a suitcase horizontally, the force (upward) is perpendicular to the displacement (horizontal). Since there's no displacement in the direction of the force, no work is done on the suitcase."
                },
                {
                    question: "A ball is thrown upward. At its highest point, which statement is true?",
                    options: [
                        "It has maximum kinetic energy and zero potential energy",
                        "It has zero kinetic energy and maximum potential energy",
                        "It has equal kinetic and potential energy",
                        "It has zero total energy"
                    ],
                    correct: 1,
                    explanation: "At the highest point, the ball momentarily stops (v = 0), so KE = 0. However, it's at maximum height, so PE is at maximum. Energy has been transformed from KE to PE during the upward journey."
                },
                {
                    question: "A 2 kg object is dropped from a height of 10 m. What is its speed just before hitting the ground? (Ignore air resistance, g = 10 m/s²)",
                    options: [
                        "10 m/s",
                        "14.1 m/s",
                        "20 m/s",
                        "100 m/s"
                    ],
                    correct: 1,
                    explanation: "Using energy conservation: PE_initial = KE_final. mgh = ½mv², so gh = ½v². Solving: v² = 2gh = 2 × 10 × 10 = 200, therefore v = √200 ≈ 14.1 m/s"
                },
                {
                    question: "A 60 W light bulb runs for 10 hours. How much energy does it consume?",
                    options: [
                        "600 J",
                        "36,000 J",
                        "600,000 J",
                        "2,160,000 J"
                    ],
                    correct: 3,
                    explanation: "Energy = Power × Time = 60 W × (10 hours × 3600 s/hour) = 60 × 36,000 = 2,160,000 J or 2.16 MJ"
                },
                {
                    question: "If you double the speed of a car, its kinetic energy:",
                    options: [
                        "Stays the same",
                        "Doubles",
                        "Triples",
                        "Quadruples"
                    ],
                    correct: 3,
                    explanation: "KE = ½mv². Since velocity is squared, doubling the speed means: KE_new = ½m(2v)² = ½m(4v²) = 4(½mv²) = 4 × KE_original"
                },
                {
                    question: "A spring with spring constant k = 200 N/m is compressed by 0.1 m. How much elastic potential energy is stored?",
                    options: [
                        "1 J",
                        "2 J",
                        "10 J",
                        "20 J"
                    ],
                    correct: 0,
                    explanation: "PE_elastic = ½kx² = ½ × 200 N/m × (0.1 m)² = ½ × 200 × 0.01 = 1 J"
                },
                {
                    question: "Which statement correctly describes the Law of Conservation of Energy?",
                    options: [
                        "Energy is created when objects move faster",
                        "Energy can be created but not destroyed",
                        "Energy cannot be created or destroyed, only transformed",
                        "Energy decreases over time due to friction"
                    ],
                    correct: 2,
                    explanation: "The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed from one form to another. The total energy in a closed system remains constant."
                },
                {
                    question: "A 50 kg person runs up stairs 6 m high in 3 seconds. What is their power output? (g = 10 m/s²)",
                    options: [
                        "100 W",
                        "500 W",
                        "1,000 W",
                        "3,000 W"
                    ],
                    correct: 2,
                    explanation: "Work = Force × distance = mgh = 50 × 10 × 6 = 3,000 J. Power = Work/time = 3,000 J / 3 s = 1,000 W"
                }
            ]
        }
    ]
};
