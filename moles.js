const molesChapter = {
    id: "moles",
    title: "Moles and Stoichiometry",
    sections: [
        {
            id: "intro-mole",
            title: "Introduction to the Mole",
            type: "teaching",
            content: `
                <h2>What is a Mole?</h2>
                <p>Just like "a dozen" means 12 items, "a mole" is a special number used in chemistry. But instead of 12, a mole represents a much larger number!</p>

                <div class="key-concept">
                    <h4>🎯 Definition of a Mole</h4>
                    <p>One mole (1 mol) = 6.02 × 10²³ particles</p>
                    <p>This number is called <strong>Avogadro's Number</strong> (N_A).</p>
                </div>

                <h3>Why Do We Need the Mole?</h3>
                <p>Atoms and molecules are incredibly tiny. We can't count them individually, but we need to know how many we have for chemical reactions. The mole gives us a way to count atoms by weighing them!</p>

                <div class="example-box">
                    <h4>📝 Real-World Analogy</h4>
                    <p>Imagine you have a huge jar of rice grains. Counting each grain would take forever! Instead, you could:</p>
                    <ul>
                        <li>Count 100 grains and weigh them</li>
                        <li>Calculate the average mass per grain</li>
                        <li>Weigh the whole jar and calculate total grains</li>
                    </ul>
                    <p>This is exactly what chemists do with atoms using moles!</p>
                </div>

                <h3>Avogadro's Number in Perspective</h3>
                <p>6.02 × 10²³ is an ENORMOUS number. To understand how big:</p>
                <ul>
                    <li>If you had 6.02 × 10²³ grains of sand, they would cover all the world's beaches to a depth of several meters!</li>
                    <li>If you counted one number per second, it would take you over 19 trillion years to count to Avogadro's number!</li>
                </ul>

                <div class="key-concept">
                    <h4>💡 Key Understanding</h4>
                    <p>A mole can refer to ANY type of particle:</p>
                    <ul>
                        <li>1 mole of carbon atoms = 6.02 × 10²³ carbon atoms</li>
                        <li>1 mole of water molecules = 6.02 × 10²³ water molecules</li>
                        <li>1 mole of electrons = 6.02 × 10²³ electrons</li>
                    </ul>
                </div>
            `
        },
        {
            id: "molar-mass",
            title: "Molar Mass and Mass Calculations",
            type: "teaching",
            content: `
                <h2>Molar Mass</h2>
                <p>Molar mass is the mass of one mole of a substance, measured in grams per mole (g/mol).</p>

                <div class="key-concept">
                    <h4>🎯 Important Connection</h4>
                    <p>The molar mass (in g/mol) has the SAME NUMBER as the atomic mass (in amu) from the periodic table!</p>
                    <ul>
                        <li>Carbon: Atomic mass = 12.01 amu → Molar mass = 12.01 g/mol</li>
                        <li>Oxygen: Atomic mass = 16.00 amu → Molar mass = 16.00 g/mol</li>
                        <li>Hydrogen: Atomic mass = 1.01 amu → Molar mass = 1.01 g/mol</li>
                    </ul>
                </div>

                <h3>Calculating Molar Mass of Compounds</h3>
                <p>For compounds, add up the molar masses of all atoms in the formula.</p>

                <div class="example-box">
                    <h4>📝 Example 1: Water (H₂O)</h4>
                    <p><strong>Step 1:</strong> Identify all atoms</p>
                    <ul>
                        <li>2 Hydrogen atoms (H)</li>
                        <li>1 Oxygen atom (O)</li>
                    </ul>
                    <p><strong>Step 2:</strong> Find molar mass of each element</p>
                    <ul>
                        <li>H = 1.01 g/mol</li>
                        <li>O = 16.00 g/mol</li>
                    </ul>
                    <p><strong>Step 3:</strong> Multiply and add</p>
                    <p>Molar mass of H₂O = (2 × 1.01) + (1 × 16.00) = 2.02 + 16.00 = 18.02 g/mol</p>
                    <p><strong>Answer:</strong> The molar mass of water is 18.02 g/mol</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 2: Calcium Carbonate (CaCO₃)</h4>
                    <p><strong>Step 1:</strong> Identify all atoms</p>
                    <ul>
                        <li>1 Calcium atom (Ca)</li>
                        <li>1 Carbon atom (C)</li>
                        <li>3 Oxygen atoms (O)</li>
                    </ul>
                    <p><strong>Step 2:</strong> Find molar masses</p>
                    <ul>
                        <li>Ca = 40.08 g/mol</li>
                        <li>C = 12.01 g/mol</li>
                        <li>O = 16.00 g/mol</li>
                    </ul>
                    <p><strong>Step 3:</strong> Calculate</p>
                    <p>Molar mass = (1 × 40.08) + (1 × 12.01) + (3 × 16.00)</p>
                    <p>= 40.08 + 12.01 + 48.00 = 100.09 g/mol</p>
                    <p><strong>Answer:</strong> The molar mass of CaCO₃ is 100.09 g/mol</p>
                </div>

                <h3>The Mole Conversion Triangle</h3>
                <p>This triangle helps you convert between mass, moles, and particles:</p>

                <div class="formula">
                    <strong>Three Key Relationships:</strong><br>
                    1. moles = mass (g) / molar mass (g/mol)<br>
                    2. mass (g) = moles × molar mass (g/mol)<br>
                    3. particles = moles × 6.02 × 10²³
                </div>

                <div class="example-box">
                    <h4>📝 Example 3: Mass to Moles</h4>
                    <p><strong>Problem:</strong> How many moles are in 36 g of water (H₂O)?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Step 1: Find molar mass of H₂O = 18.02 g/mol (from Example 1)</p>
                    <p>Step 2: Use formula: moles = mass / molar mass</p>
                    <p>moles = 36 g / 18.02 g/mol = 2.0 mol</p>
                    <p><strong>Answer:</strong> 36 g of water contains 2.0 moles</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 4: Moles to Mass</h4>
                    <p><strong>Problem:</strong> What is the mass of 0.5 moles of carbon dioxide (CO₂)?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Step 1: Calculate molar mass of CO₂</p>
                    <p>Molar mass = 12.01 + (2 × 16.00) = 44.01 g/mol</p>
                    <p>Step 2: Use formula: mass = moles × molar mass</p>
                    <p>mass = 0.5 mol × 44.01 g/mol = 22.0 g</p>
                    <p><strong>Answer:</strong> 0.5 moles of CO₂ has a mass of 22.0 g</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 5: Moles to Particles</h4>
                    <p><strong>Problem:</strong> How many molecules are in 2.5 moles of oxygen gas (O₂)?</p>
                    <p><strong>Solution:</strong></p>
                    <p>Use formula: particles = moles × Avogadro's number</p>
                    <p>molecules = 2.5 mol × 6.02 × 10²³ molecules/mol</p>
                    <p>= 1.51 × 10²⁴ molecules</p>
                    <p><strong>Answer:</strong> 2.5 moles of O₂ contains 1.51 × 10²⁴ molecules</p>
                </div>
            `
        },
        {
            id: "stoichiometry",
            title: "Stoichiometry and Chemical Equations",
            type: "teaching",
            content: `
                <h2>What is Stoichiometry?</h2>
                <p>Stoichiometry is the study of the quantitative relationships in chemical reactions. It helps us answer questions like "If I have this much reactant, how much product can I make?"</p>

                <h3>Balanced Chemical Equations</h3>
                <p>Before we can use stoichiometry, equations must be balanced (same number of each type of atom on both sides).</p>

                <div class="example-box">
                    <h4>📝 Example: Combustion of Methane</h4>
                    <p><strong>Balanced equation:</strong></p>
                    <div class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
                    <p><strong>What this tells us:</strong></p>
                    <ul>
                        <li>1 molecule of CH₄ reacts with 2 molecules of O₂</li>
                        <li>Produces 1 molecule of CO₂ and 2 molecules of H₂O</li>
                        <li>Or: 1 mole of CH₄ reacts with 2 moles of O₂</li>
                        <li>To produce 1 mole of CO₂ and 2 moles of H₂O</li>
                    </ul>
                </div>

                <div class="key-concept">
                    <h4>🎯 Mole Ratios</h4>
                    <p>The coefficients in a balanced equation give us mole ratios:</p>
                    <p>From CH₄ + 2O₂ → CO₂ + 2H₂O:</p>
                    <ul>
                        <li>1 mol CH₄ : 2 mol O₂ (ratio 1:2)</li>
                        <li>1 mol CH₄ : 1 mol CO₂ (ratio 1:1)</li>
                        <li>2 mol O₂ : 2 mol H₂O (ratio 1:1)</li>
                    </ul>
                </div>

                <h3>Stoichiometry Calculations</h3>
                <p>The basic steps for any stoichiometry problem:</p>
                <ol>
                    <li>Write and balance the chemical equation</li>
                    <li>Convert given information to moles</li>
                    <li>Use mole ratio to find moles of desired substance</li>
                    <li>Convert moles to desired units (mass, volume, particles)</li>
                </ol>

                <div class="example-box">
                    <h4>📝 Example 6: Mass-to-Mass Stoichiometry</h4>
                    <p><strong>Problem:</strong> How many grams of water are produced when 8.0 g of methane (CH₄) burns completely?</p>
                    <p><strong>Equation:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Convert mass of CH₄ to moles</p>
                    <p>Molar mass of CH₄ = 12.01 + (4 × 1.01) = 16.05 g/mol</p>
                    <p>moles CH₄ = 8.0 g / 16.05 g/mol = 0.498 mol</p>
                    
                    <p><strong>Step 2:</strong> Use mole ratio to find moles of H₂O</p>
                    <p>From equation: 1 mol CH₄ produces 2 mol H₂O</p>
                    <p>moles H₂O = 0.498 mol CH₄ × (2 mol H₂O / 1 mol CH₄) = 0.996 mol H₂O</p>
                    
                    <p><strong>Step 3:</strong> Convert moles of H₂O to mass</p>
                    <p>Molar mass of H₂O = 18.02 g/mol</p>
                    <p>mass H₂O = 0.996 mol × 18.02 g/mol = 17.9 g</p>
                    
                    <p><strong>Answer:</strong> 17.9 g of water is produced</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 7: Limiting Reactant</h4>
                    <p><strong>Problem:</strong> If 10 g of hydrogen reacts with 80 g of oxygen, which is the limiting reactant?</p>
                    <p><strong>Equation:</strong> 2H₂ + O₂ → 2H₂O</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Calculate moles of each reactant</p>
                    <p>moles H₂ = 10 g / 2.02 g/mol = 4.95 mol</p>
                    <p>moles O₂ = 80 g / 32.00 g/mol = 2.50 mol</p>
                    
                    <p><strong>Step 2:</strong> Check the mole ratio requirement</p>
                    <p>From equation: 2 mol H₂ requires 1 mol O₂</p>
                    <p>For 4.95 mol H₂, we need: 4.95 mol H₂ × (1 mol O₂ / 2 mol H₂) = 2.48 mol O₂</p>
                    
                    <p><strong>Step 3:</strong> Compare what we need with what we have</p>
                    <p>We need 2.48 mol O₂, and we have 2.50 mol O₂</p>
                    <p>We have enough O₂! Therefore, H₂ is the limiting reactant.</p>
                    
                    <p><strong>Answer:</strong> Hydrogen (H₂) is the limiting reactant</p>
                </div>

                <div class="key-concept">
                    <h4>💡 Limiting Reactant</h4>
                    <p>The limiting reactant is the reactant that runs out first, limiting how much product can be formed. It's like baking cookies—if you have 10 eggs but only enough flour for 5 batches, the flour is your limiting reactant!</p>
                </div>
            `
        },
        {
            id: "percent-composition",
            title: "Percentage Composition",
            type: "teaching",
            content: `
                <h2>What is Percentage Composition?</h2>
                <p>Percentage composition tells us what fraction of a compound's mass comes from each element.</p>

                <div class="formula">
                    <strong>Formula:</strong><br>
                    % of element = (mass of element in 1 mole / molar mass of compound) × 100%
                </div>

                <div class="example-box">
                    <h4>📝 Example 8: Percentage Composition of Water</h4>
                    <p><strong>Problem:</strong> Find the percentage composition of hydrogen and oxygen in water (H₂O).</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Calculate molar mass of H₂O</p>
                    <p>H₂O = (2 × 1.01) + (1 × 16.00) = 18.02 g/mol</p>
                    
                    <p><strong>Step 2:</strong> Find mass contribution of each element</p>
                    <p>Mass of H in 1 mole = 2 × 1.01 = 2.02 g</p>
                    <p>Mass of O in 1 mole = 1 × 16.00 = 16.00 g</p>
                    
                    <p><strong>Step 3:</strong> Calculate percentages</p>
                    <p>% H = (2.02 / 18.02) × 100% = 11.2%</p>
                    <p>% O = (16.00 / 18.02) × 100% = 88.8%</p>
                    
                    <p><strong>Answer:</strong> Water is 11.2% hydrogen and 88.8% oxygen by mass</p>
                    <p><strong>Check:</strong> 11.2% + 88.8% = 100% ✓</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 9: Percentage Composition of a Compound</h4>
                    <p><strong>Problem:</strong> Calculate the percentage composition of calcium carbonate (CaCO₃).</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Calculate molar mass</p>
                    <p>CaCO₃ = 40.08 + 12.01 + (3 × 16.00) = 100.09 g/mol</p>
                    
                    <p><strong>Step 2:</strong> Calculate mass of each element in 1 mole</p>
                    <p>Mass of Ca = 40.08 g</p>
                    <p>Mass of C = 12.01 g</p>
                    <p>Mass of O = 3 × 16.00 = 48.00 g</p>
                    
                    <p><strong>Step 3:</strong> Calculate percentages</p>
                    <p>% Ca = (40.08 / 100.09) × 100% = 40.0%</p>
                    <p>% C = (12.01 / 100.09) × 100% = 12.0%</p>
                    <p>% O = (48.00 / 100.09) × 100% = 48.0%</p>
                    
                    <p><strong>Answer:</strong> CaCO₃ is 40.0% Ca, 12.0% C, and 48.0% O</p>
                </div>

                <h3>Using Percentage Composition</h3>
                <p>If you know the percentage composition and the total mass, you can find the mass of each element:</p>

                <div class="example-box">
                    <h4>📝 Example 10: Finding Element Mass</h4>
                    <p><strong>Problem:</strong> A 50 g sample of water contains how many grams of hydrogen?</p>
                    <p><strong>Solution:</strong></p>
                    <p>From Example 8, we know water is 11.2% hydrogen</p>
                    <p>mass of H = 50 g × 0.112 = 5.6 g</p>
                    <p><strong>Answer:</strong> The sample contains 5.6 g of hydrogen</p>
                </div>
            `
        },
        {
            id: "empirical-molecular",
            title: "Empirical and Molecular Formulas",
            type: "teaching",
            content: `
                <h2>Empirical Formula vs. Molecular Formula</h2>
                
                <div class="key-concept">
                    <h4>🎯 Key Definitions</h4>
                    <p><strong>Empirical Formula:</strong> The simplest whole-number ratio of atoms in a compound</p>
                    <p><strong>Molecular Formula:</strong> The actual number of atoms of each element in one molecule</p>
                </div>

                <h3>Understanding the Difference</h3>
                <div class="example-box">
                    <h4>📝 Examples</h4>
                    <p><strong>Glucose:</strong></p>
                    <ul>
                        <li>Molecular formula: C₆H₁₂O₆</li>
                        <li>Empirical formula: CH₂O (simplest ratio is 1:2:1)</li>
                    </ul>
                    <p><strong>Hydrogen Peroxide:</strong></p>
                    <ul>
                        <li>Molecular formula: H₂O₂</li>
                        <li>Empirical formula: HO (simplest ratio is 1:1)</li>
                    </ul>
                    <p><strong>Water:</strong></p>
                    <ul>
                        <li>Molecular formula: H₂O</li>
                        <li>Empirical formula: H₂O (already in simplest form!)</li>
                    </ul>
                </div>

                <h3>Calculating Empirical Formula from Percentage Composition</h3>
                <p><strong>Steps:</strong></p>
                <ol>
                    <li>Convert percentages to grams (assume 100 g sample)</li>
                    <li>Convert grams to moles for each element</li>
                    <li>Divide all mole values by the smallest mole value</li>
                    <li>If needed, multiply all values to get whole numbers</li>
                </ol>

                <div class="example-box">
                    <h4>📝 Example 11: Finding Empirical Formula</h4>
                    <p><strong>Problem:</strong> A compound is 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen. Find its empirical formula.</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Assume 100 g sample</p>
                    <p>40.0 g C, 6.7 g H, 53.3 g O</p>
                    
                    <p><strong>Step 2:</strong> Convert to moles</p>
                    <p>moles C = 40.0 g / 12.01 g/mol = 3.33 mol</p>
                    <p>moles H = 6.7 g / 1.01 g/mol = 6.63 mol</p>
                    <p>moles O = 53.3 g / 16.00 g/mol = 3.33 mol</p>
                    
                    <p><strong>Step 3:</strong> Divide by smallest (3.33)</p>
                    <p>C: 3.33 / 3.33 = 1</p>
                    <p>H: 6.63 / 3.33 = 2</p>
                    <p>O: 3.33 / 3.33 = 1</p>
                    
                    <p><strong>Answer:</strong> Empirical formula is CH₂O</p>
                </div>

                <div class="example-box">
                    <h4>📝 Example 12: When You Need to Multiply</h4>
                    <p><strong>Problem:</strong> A compound is 43.64% P and 56.36% O. Find its empirical formula.</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1 & 2:</strong> Convert to moles (assume 100 g)</p>
                    <p>moles P = 43.64 g / 30.97 g/mol = 1.41 mol</p>
                    <p>moles O = 56.36 g / 16.00 g/mol = 3.52 mol</p>
                    
                    <p><strong>Step 3:</strong> Divide by smallest (1.41)</p>
                    <p>P: 1.41 / 1.41 = 1</p>
                    <p>O: 3.52 / 1.41 = 2.5</p>
                    
                    <p><strong>Step 4:</strong> Multiply to get whole numbers</p>
                    <p>Since we have 2.5, multiply everything by 2:</p>
                    <p>P: 1 × 2 = 2</p>
                    <p>O: 2.5 × 2 = 5</p>
                    
                    <p><strong>Answer:</strong> Empirical formula is P₂O₅</p>
                </div>

                <h3>Finding Molecular Formula from Empirical Formula</h3>
                <p>If you know the empirical formula and the molar mass of the compound, you can find the molecular formula.</p>

                <div class="formula">
                    <strong>Formula:</strong><br>
                    n = (molar mass of compound) / (molar mass of empirical formula)<br>
                    Molecular formula = (Empirical formula) × n
                </div>

                <div class="example-box">
                    <h4>📝 Example 13: Empirical to Molecular Formula</h4>
                    <p><strong>Problem:</strong> A compound has empirical formula CH₂O and a molar mass of 180 g/mol. Find its molecular formula.</p>
                    <p><strong>Solution:</strong></p>
                    <p><strong>Step 1:</strong> Calculate molar mass of empirical formula</p>
                    <p>CH₂O = 12.01 + (2 × 1.01) + 16.00 = 30.03 g/mol</p>
                    
                    <p><strong>Step 2:</strong> Find the multiplier n</p>
                    <p>n = 180 g/mol / 30.03 g/mol = 6</p>
                    
                    <p><strong>Step 3:</strong> Multiply empirical formula by n</p>
                    <p>(CH₂O) × 6 = C₆H₁₂O₆</p>
                    
                    <p><strong>Answer:</strong> Molecular formula is C₆H₁₂O₆ (glucose!)</p>
                </div>

                <div class="key-concept">
                    <h4>💡 Remember</h4>
                    <p>The molecular formula is always a whole-number multiple of the empirical formula. If the multiplier is 1, then the empirical and molecular formulas are the same!</p>
                </div>
            `
        },
        {
            id: "quiz",
            title: "Practice Quiz",
            type: "quiz",
            questions: [
                {
                    question: "How many particles are in one mole of any substance?",
                    options: [
                        "6.02 × 10²²",
                        "6.02 × 10²³",
                        "6.02 × 10²⁴",
                        "6.02 × 10²⁵"
                    ],
                    correct: 1,
                    explanation: "One mole contains Avogadro's number of particles, which is 6.02 × 10²³. This is true for any substance—atoms, molecules, ions, etc."
                },
                {
                    question: "What is the molar mass of carbon dioxide (CO₂)? (C=12.01, O=16.00 g/mol)",
                    options: [
                        "28.01 g/mol",
                        "32.00 g/mol",
                        "44.01 g/mol",
                        "60.01 g/mol"
                    ],
                    correct: 2,
                    explanation: "Molar mass of CO₂ = 12.01 + (2 × 16.00) = 12.01 + 32.00 = 44.01 g/mol"
                },
                {
                    question: "How many moles are in 36 g of water (H₂O)? (Molar mass of H₂O = 18 g/mol)",
                    options: [
                        "0.5 mol",
                        "1.0 mol",
                        "2.0 mol",
                        "4.0 mol"
                    ],
                    correct: 2,
                    explanation: "moles = mass / molar mass = 36 g / 18 g/mol = 2.0 mol"
                },
                {
                    question: "In the equation 2H₂ + O₂ → 2H₂O, what is the mole ratio of H₂ to H₂O?",
                    options: [
                        "1:1",
                        "1:2",
                        "2:1",
                        "2:2"
                    ],
                    correct: 0,
                    explanation: "The coefficients tell us: 2 moles of H₂ produce 2 moles of H₂O. Simplified, this is a 1:1 ratio (or 2:2, which is the same thing)."
                },
                {
                    question: "What is the mass of 0.25 moles of sodium chloride (NaCl)? (Molar mass = 58.5 g/mol)",
                    options: [
                        "11.7 g",
                        "14.6 g",
                        "23.4 g",
                        "29.3 g"
                    ],
                    correct: 1,
                    explanation: "mass = moles × molar mass = 0.25 mol × 58.5 g/mol = 14.6 g (approximately)"
                },
                {
                    question: "A compound is 75% carbon and 25% hydrogen. What is its empirical formula? (C=12, H=1)",
                    options: [
                        "CH",
                        "CH₂",
                        "CH₃",
                        "CH₄"
                    ],
                    correct: 3,
                    explanation: "Assuming 100g: C = 75g/12 = 6.25 mol, H = 25g/1 = 25 mol. Dividing by 6.25 gives C:H = 1:4, so CH₄"
                },
                {
                    question: "If the empirical formula of a compound is CH and its molar mass is 78 g/mol, what is the molecular formula?",
                    options: [
                        "CH",
                        "C₂H₂",
                        "C₄H₄",
                        "C₆H₆"
                    ],
                    correct: 3,
                    explanation: "Molar mass of CH = 13 g/mol. n = 78/13 = 6. Therefore, molecular formula = (CH) × 6 = C₆H₆"
                },
                {
                    question: "What is the percentage of oxygen in water (H₂O)? (H=1, O=16)",
                    options: [
                        "11.1%",
                        "50.0%",
                        "66.7%",
                        "88.9%"
                    ],
                    correct: 3,
                    explanation: "Molar mass of H₂O = 18 g/mol. Mass of O = 16 g. % O = (16/18) × 100% = 88.9%"
                },
                {
                    question: "In a reaction, if you have excess oxygen and 10 g of hydrogen, and the equation is 2H₂ + O₂ → 2H₂O, which is the limiting reactant?",
                    options: [
                        "Hydrogen",
                        "Oxygen",
                        "Water",
                        "Both H₂ and O₂"
                    ],
                    correct: 0,
                    explanation: "Since oxygen is in excess, hydrogen must be the limiting reactant. The limiting reactant is the one that runs out first, determining how much product can be made."
                },
                {
                    question: "How many molecules are in 2.0 moles of methane (CH₄)?",
                    options: [
                        "3.01 × 10²³",
                        "6.02 × 10²³",
                        "1.20 × 10²⁴",
                        "1.81 × 10²⁴"
                    ],
                    correct: 2,
                    explanation: "molecules = moles × Avogadro's number = 2.0 mol × 6.02 × 10²³ = 1.204 × 10²⁴ molecules"
                }
            ]
        }
    ]
};
