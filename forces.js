const forcesChapter = {
    id: "forces",
    title: "Forces and Newton's Laws",
    sections: [
        {
            id: "intro-forces",
            title: "Introduction to Forces",
            type: "teaching",
            content: `
                <h2>What is a Force?</h2>
                <p>A force is a push or pull that can change an object's motion. Forces are vector quantities, meaning they have both magnitude (size) and direction.</p>

                <div class="key-concept">
                    <h4>🎯 Key Characteristics of Forces</h4>
                    <ul>
                        <li><strong>Magnitude:</strong> How strong the force is (measured in Newtons, N)</li>
                        <li><strong>Direction:</strong> Which way the force acts</li>
                        <li><strong>Point of application:</strong> Where the force is applied on the object</li>
                    </ul>
                </div>

                <h3>Types of Forces</h3>
                
                <h4>1. Gravitational Force (Weight)</h4>
                <p>The force of attraction between objects with mass. On Earth, this pulls objects downward.</p>
                <div class="formula">
                    F_g = mg
                </div>
                <p>Where m = mass (kg), g = 9.8 m/s² or 10 m/s² (simplified)</p>

                <div class="example-box">
                    <h4>📝 Example 1: Calculating Weight</h4>
                    <p><strong>Problem:</strong> What is the weight of a 60 kg person? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>F_g = mg = 60 kg × 10 m/s² = 600 N</p>
                    <p><strong>Answer:</strong> The person's weight is 600 N downward.</p>
                </div>

                <h4>2. Normal Force (F_N)</h4>
                <p>The support force exerted by a surface on an object. It acts perpendicular (normal) to the surface.</p>
                <ul>
                    <li>On a flat horizontal surface: F_N = mg (equals weight)</li>
                    <li>On an incline or with other forces: F_N may differ from weight</li>
                </ul>

                <h4>3. Friction Force (f)</h4>
                <p>The force that opposes motion between surfaces in contact.</p>
                <div class="formula">
                    f = μF_N
                </div>
                <p>Where μ (mu) = coefficient of friction, F_N = normal force</p>

                <div class="key-concept">
                    <h4>💡 Types of Friction</h4>
                    <ul>
                        <li><strong>Static friction (f_s):</strong> Prevents objects from starting to move</li>
                        <li><strong>Kinetic friction (f_k):</strong> Opposes motion of moving objects</li>
                        <li>Usually: μ_s > μ_k (static friction is stronger)</li>
                    </ul>
                </div>

                <h4>4. Tension Force (T)</h4>
                <p>The pulling force transmitted through a rope, string, or cable.</p>

                <h4>5. Applied Force</h4>
                <p>Any force directly applied to an object (pushing, pulling, etc.)</p>

                <div class="example-box">
                    <h4>📝 Example 2: Friction Calculation</h4>
                    <p><strong>Problem:</strong> A 20 kg box sits on a floor. The coefficient of static friction is 0.4. What minimum force is needed to start moving the box? (Use g = 10 m/s²)</p>
                    <p><strong>Solution:</strong></p>
                    <p>Step 1: Find normal force: F_N = mg = 20 × 10 = 200 N</p>
                    <p>Step 2: Find friction: f_s = μF_N = 0.4 × 200 = 80 N</p>
                    <p><strong>Answer:</strong> You need at least 80 N to overcome static friction and start moving the box.</p>
                </div>
            `
        },
        {
            id: "free-body-diagrams",
            title: "Free Body Diagrams",
            type: "teaching",
            content: `
                <h2>What is a Free Body Diagram?</h2>
                <p>A Free Body Diagram (FBD) is a simple drawing that shows all forces acting on a single object. It's one of the most important tools in physics for analyzing motion!</p>

                <div class="key-concept">
                    <h4>🎯 Steps to Draw a Free Body Diagram</h4>
                    <ol>
                        <li>Draw a dot or box representing the object</li>
                        <li>Draw arrows for each force acting ON the object</li>
                        <li>Label each force with its name and magnitude (if known)</li>
                        <li>Make arrow length proportional to force magnitude</li>
                        <li>Show direction accurately</li>
                    </ol>
                </div>

                <h3>Common FBD Examples</h3>

                <div class="example-box">
                    <h4>📝 Example 3: Book on a Table</h4>
                    <p><strong>Scenario:</strong> A book sitting at rest on a table.</p>
                    <p><strong>Forces:</strong></p>
                    <ul>
                        <li><strong>F_g (Weight):</strong> Downward arrow (mg)</li>
                        <li><strong>F_N (Normal):</strong> Upward arrow (equals mg)</li>
                    </ul>
                    <p><strong>Analysis:</strong> The forces are balanced (equal and opposite), so the book remains at rest.</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 4: Box Being Pushed</h4>
                    <p><strong>Scenario:</strong> A box being pushed across a floor at constant speed.</p>
                    <p><strong>Forces:</strong></p>
                    <ul>
                        <li><strong>F_g:</strong> Downward (weight)</li>
                        <li><strong>F_N:</strong> Upward (normal force)</li>
                        <li><strong>F_applied:</strong> Horizontal right (pushing force)</li>
                        <li><strong>f:</strong> Horizontal left (friction)</li>
                    </ul>
                    <p><strong>Analysis:</strong> Since speed is constant, F_applied = f (balanced horizontal forces)</p>
                </div>

                <h3>Net Force</h3>
                <p>The net force is the sum of all forces acting on an object, taking direction into account.</p>

                <div class="formula">
                    F_net = ΣF (sum of all forces)
                </div>

                <div class="key-concept">
                    <h4>💡 Important Rules</h4>
                    <ul>
                        <li>If F_net = 0: Object is at rest OR moving at constant velocity</li>
                        <li>If F_net ≠ 0: Object is accelerating</li>
                        <li>Forces in opposite directions subtract</li>
                        <li>Forces in the same direction add</li>
                    </ul>
                </div>

                <div class="example-box">
                    <h4>📝 Example 5: Calculating Net Force</h4>
                    <p><strong>Problem:</strong> Three horizontal forces act on a box: 50 N right, 30 N right, and 60 N left. What is the net force?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Let's say right = positive direction</p>
                    <p>F_net = (+50 N) + (+30 N) + (-60 N) = +20 N</p>
                    <p><strong>Answer:</strong> The net force is 20 N to the right.</p>
                </div>
            `
        },
        {
            id: "newtons-laws",
            title: "Newton's Three Laws of Motion",
            type: "teaching",
            content: `
                <h2>Newton's First Law: Law of Inertia</h2>
                
                <div class="key-concept">
                    <h4>⚡ First Law Statement</h4>
                    <p><strong>An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force.</strong></p>
                </div>

                <h3>What is Inertia?</h3>
                <p>Inertia is the tendency of an object to resist changes in its motion. Mass is a measure of inertia—the more massive an object, the harder it is to change its motion.</p>

                <div class="example-box">
                    <h4>📝 Real-World Examples of First Law</h4>
                    <ul>
                        <li><strong>Car accident:</strong> When a car stops suddenly, passengers continue forward (inertia)—that's why seatbelts are important!</li>
                        <li><strong>Tablecloth trick:</strong> Pulling a tablecloth quickly leaves dishes in place due to their inertia</li>
                        <li><strong>Space travel:</strong> Once a spacecraft is moving in space (no air resistance), it continues at constant speed without using fuel</li>
                    </ul>
                </div>

                <h2>Newton's Second Law: F = ma</h2>
                
                <div class="key-concept">
                    <h4>⚡ Second Law Statement</h4>
                    <p><strong>The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</strong></p>
                    <div class="formula">
                        F_net = ma
                    </div>
                    <p>Where:</p>
                    <ul>
                        <li>F_net = net force (Newtons, N)</li>
                        <li>m = mass (kilograms, kg)</li>
                        <li>a = acceleration (m/s²)</li>
                    </ul>
                </div>

                <h3>Understanding F = ma</h3>
                <ul>
                    <li><strong>More force → more acceleration</strong> (if mass is constant)</li>
                    <li><strong>More mass → less acceleration</strong> (if force is constant)</li>
                    <li>Force and acceleration are in the same direction</li>
                </ul>

                <div class="example-box">
                    <h4>📝 Example 6: Applying F = ma</h4>
                    <p><strong>Problem:</strong> A 10 kg box is pushed with a net force of 50 N. What is its acceleration?</p>
                    <p><strong>Solution:</strong></p>
                    <p>F_net = ma</p>
                    <p>50 N = 10 kg × a</p>
                    <p>a = 50 N / 10 kg = 5 m/s²</p>
                    <p><strong>Answer:</strong> The box accelerates at 5 m/s²</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 7: Finding Net Force</h4>
                    <p><strong>Problem:</strong> A 1200 kg car accelerates from rest to 20 m/s in 10 seconds. What net force is required?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Step 1: Find acceleration: a = Δv/Δt = 20 m/s / 10 s = 2 m/s²</p>
                    <p>Step 2: Use F = ma</p>
                    <p>F_net = 1200 kg × 2 m/s² = 2400 N</p>
                    <p><strong>Answer:</strong> A net force of 2400 N is needed</p>
                </div>

                <h2>Newton's Third Law: Action-Reaction</h2>
                
                <div class="key-concept">
                    <h4>⚡ Third Law Statement</h4>
                    <p><strong>For every action force, there is an equal and opposite reaction force.</strong></p>
                    <p>Or: When object A exerts a force on object B, object B simultaneously exerts a force of equal magnitude but opposite direction on object A.</p>
                </div>

                <h3>Important Notes About Third Law</h3>
                <ul>
                    <li>Action and reaction forces act on DIFFERENT objects</li>
                    <li>They are always equal in magnitude</li>
                    <li>They are always opposite in direction</li>
                    <li>They occur simultaneously (at the same time)</li>
                </ul>

                <div class="example-box">
                    <h4>📝 Example 8: Action-Reaction Pairs</h4>
                    <p><strong>You push against a wall:</strong></p>
                    <ul>
                        <li><strong>Action:</strong> Your hand pushes on the wall (force on wall)</li>
                        <li><strong>Reaction:</strong> The wall pushes back on your hand (force on you)</li>
                    </ul>
                    
                    <p><strong>Earth pulls you downward:</strong></p>
                    <ul>
                        <li><strong>Action:</strong> Earth pulls you down with gravity (your weight)</li>
                        <li><strong>Reaction:</strong> You pull Earth upward with equal force</li>
                    </ul>
                    
                    <p><strong>Why don't you see Earth move?</strong> Because Earth's mass is so huge, the same force produces an incredibly tiny acceleration (F = ma, large m means tiny a)!</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 9: Rocket Propulsion</h4>
                    <p><strong>How do rockets work in space?</strong></p>
                    <ul>
                        <li><strong>Action:</strong> Rocket pushes gas molecules backward (exhaust)</li>
                        <li><strong>Reaction:</strong> Gas molecules push rocket forward</li>
                    </ul>
                    <p>This is why rockets don't need air to push against—they carry their own reaction mass (fuel)!</p>
                </div>

                <div class="key-concept">
                    <h4>💡 Common Misconception</h4>
                    <p><strong>Myth:</strong> "Heavier objects fall faster"</p>
                    <p><strong>Truth:</strong> In the absence of air resistance, all objects fall at the same rate (9.8 m/s²) regardless of mass!</p>
                    <p>Why? Because while heavier objects have more gravitational force (F = mg), they also have more inertia (resistance to acceleration). These effects exactly cancel out in F = ma.</p>
                </div>
            `
        },
        {
            id: "quiz",
            title: "Practice Quiz",
            type: "quiz",
            questions: [
                {
                    question: "What is the weight of a 5 kg object on Earth? (Use g = 10 m/s²)",
                    options: [
                        "5 N",
                        "25 N",
                        "50 N",
                        "500 N"
                    ],
                    correct: 2,
                    explanation: "Weight = mg = 5 kg × 10 m/s² = 50 N downward"
                },
                {
                    question: "A 20 kg box is at rest on a floor with coefficient of friction 0.3. What is the force of friction? (g = 10 m/s²)",
                    options: [
                        "0 N",
                        "6 N",
                        "60 N",
                        "200 N"
                    ],
                    correct: 0,
                    explanation: "The box is at rest, so there's no friction yet. Static friction only appears when you try to move the object. If you pushed with a small force, friction would match it up to a maximum of μF_N = 0.3 × 200 N = 60 N."
                },
                {
                    question: "Which of Newton's laws explains why you feel pushed back in your seat when a car accelerates?",
                    options: [
                        "First Law (Inertia)",
                        "Second Law (F=ma)",
                        "Third Law (Action-Reaction)",
                        "None of the above"
                    ],
                    correct: 0,
                    explanation: "This is Newton's First Law. Your body wants to stay at rest (inertia) while the car accelerates forward. The seat pushes you forward, but you feel like you're being pushed backward."
                },
                {
                    question: "A 10 kg object accelerates at 5 m/s². What is the net force acting on it?",
                    options: [
                        "2 N",
                        "15 N",
                        "50 N",
                        "100 N"
                    ],
                    correct: 2,
                    explanation: "F_net = ma = 10 kg × 5 m/s² = 50 N"
                },
                {
                    question: "If you push on a wall with 100 N of force, how much force does the wall push back on you?",
                    options: [
                        "0 N",
                        "50 N",
                        "100 N",
                        "200 N"
                    ],
                    correct: 2,
                    explanation: "Newton's Third Law states that action and reaction forces are equal and opposite. The wall pushes back with exactly 100 N."
                },
                {
                    question: "An object is moving at constant velocity. What can you conclude about the net force?",
                    options: [
                        "Net force must be zero",
                        "Net force must be positive",
                        "Net force must be negative",
                        "Net force must equal the weight"
                    ],
                    correct: 0,
                    explanation: "Constant velocity means no acceleration (a = 0). From F = ma, if a = 0, then F_net = 0. This is also Newton's First Law."
                },
                {
                    question: "Two forces act on an object: 30 N to the right and 50 N to the left. What is the net force?",
                    options: [
                        "20 N to the left",
                        "20 N to the right",
                        "80 N to the left",
                        "80 N to the right"
                    ],
                    correct: 0,
                    explanation: "Taking right as positive: F_net = +30 N + (-50 N) = -20 N. The negative means left, so 20 N to the left."
                },
                {
                    question: "Why does a heavy object have the same acceleration as a light object when both are dropped (ignoring air resistance)?",
                    options: [
                        "Heavy objects have more force pulling them down",
                        "Light objects have less inertia to overcome",
                        "The gravitational force increases with mass, but so does inertia, canceling out",
                        "This statement is false; heavy objects do fall faster"
                    ],
                    correct: 2,
                    explanation: "From F = ma and F = mg, we get: mg = ma, so a = g. The mass cancels out! Heavier objects have proportionally more gravitational force AND more inertia, so they accelerate at the same rate."
                },
                {
                    question: "What force causes a book resting on a table to remain stationary?",
                    options: [
                        "Only gravity",
                        "Only the normal force",
                        "Gravity and normal force are balanced",
                        "Friction alone"
                    ],
                    correct: 2,
                    explanation: "The book experiences two forces: gravity pulling down and the normal force from the table pushing up. These are equal and opposite (net force = 0), so the book remains at rest."
                },
                {
                    question: "A 50 kg person stands on a scale in an elevator accelerating upward at 2 m/s². What does the scale read? (g = 10 m/s²)",
                    options: [
                        "400 N",
                        "500 N",
                        "600 N",
                        "700 N"
                    ],
                    correct: 2,
                    explanation: "F_net = ma = 50 × 2 = 100 N upward. F_net = F_N - F_g, so 100 = F_N - 500, giving F_N = 600 N. The scale measures normal force."
                }
            ]
        }
    ]
};
