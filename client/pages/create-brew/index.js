import React, { Component } from "react";
import classnames from "classnames";
import CreateBrewSteps from "../../components/create-brew-steps";
import EquipmentLi from "../../components/list-items/equipment";
import IngredientLi from "../../components/list-items/ingredient";
import List from "../../components/list-items/list";
import Nav from "../../components/nav";
import NumberInput from "../../components/form-components/number-input";
import PrevNext from "../../components/buttons/prev-next";
import SideContainer from "../../components/side-container";
import StepIcon from "../../components/step-icon";
import TextInput from "../../components/form-components/text-input";
import TextArea from "../../components/form-components/text-area";
import styles from "./create-brew.css";

const steps = ["Description", "Ingredients", "Equipment", "Instructions"];

class CreateBrew extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentStep: 0,
			currentInput: {},
			basic: {},
			recipe: {
				ingredients: [],
				equipment: [],
				steps: []
			}
		};

		this.addIngredient = this.addIngredient.bind(this);
		this.addEquipment = this.addEquipment.bind(this);
		this.addStep = this.addStep.bind(this);
		this.changeStep = this.changeStep.bind(this);
		this.remove = this.remove.bind(this);
		this.updateCurrent = this.updateCurrent.bind(this);
		this.renderList = this.renderList.bind(this);
	}

	changeStep(index) { 
		this.setState({
			currentStep: index
		});
	}

	updateCurrent(current) {
		const currentInput = {
			...this.state.currentInput,
			...current
		}

		this.setState({
			currentInput
		});
	}

	updateBasic(current) {
		const basic = {
			...this.state.basic,
			...current
		}

		this.setState({
			basic
		});
	}

	addIngredient(e) {
		e.preventDefault();
		const currentIngredient = this.state.currentInput;

		if(currentIngredient.name.length && this.state.recipe.ingredients.indexOf(currentIngredient) < 0) {		
			const ingredients = [...this.state.recipe.ingredients, currentIngredient];

			this.setState({
				recipe: {
					...this.state.recipe,
					ingredients
				},
				currentInput: {}
			});
		}
	}

	addEquipment(e) {
		e.preventDefault();
		const currentEquipment = this.state.currentInput;


		if(currentEquipment && this.state.recipe.equipment.indexOf(currentEquipment) < 0) {		
			const equipment = [...this.state.recipe.equipment, currentEquipment];

			this.setState({
				recipe: {
					...this.state.recipe,
					equipment
				},
				currentInput: {}
			})
		}
	}

	addStep(e) {
		e.preventDefault();
		const instruction = this.state.currentInput;
		const instructionContent = instruction.instructions;

		if(instructionContent && this.state.recipe.steps.indexOf(instructionContent) < 0) {		
			const steps = [...this.state.recipe.steps, instruction];

			this.setState({
				recipe: {
					...this.state.recipe,
					steps
				},
				currentInput: {}
			});

		}
	}

	remove(forRemoval, list) {
		const newList = this.state.recipe[list].filter((item, index) => index !== forRemoval );

		this.setState({
			recipe: {				
				...this.state.recipe,
				[list]: newList
			}
		});
	}

	renderList() {
		const {currentStep, recipe} = this.state;

		if(currentStep === 0) {
			return null
		} else if (currentStep === 3) {
			return (
				<List className={styles.ingredientsList} placeholder="Add each step, and the time it takes. Rome was built in 1 day, for example">
					{recipe.steps.map((step, i) => (
						<li className={styles.stepsListLiContainer} index={i} onClick={() => this.remove(i, "steps")}>
							<p className={styles.stepsListLi}>
								{
									`Step ${i + 1}` 
								}
							</p>
							<p>{step.instructions}</p>
							{
								step.days &&
								<span>
									{`${step.days} days`}
								</span>
							}
							{
								step.hours &&
								<span>
									{`${step.hours} hours`}
								</span>
							}
							{
								step.minutes &&
								<span>
									{`${step.minutes} minutes`}
								</span>
							}
						</li>
					))}
				</List>
			);
		} else if (currentStep === 1) {
			return (
				<List 
					className={styles.ingredientsList} 
					placeholder="Arguably ingredients give the brew flavor, you should add some."
				>
					{recipe.ingredients.map((listItem, i) => (
						<IngredientLi ingredient={listItem} index={i} onClick={() => this.remove(i, "ingredients")}/>
					))}
				</List>
			)
		} else if (currentStep === 2) {
			return (
				<List 
					className={styles.ingredientsList} 
					placeholder="Add all the equipment you'll need"
				>
					{recipe.equipment.map((listItem, i) => (
						<EquipmentLi item={listItem} index={i} onClick={() => this.remove(i, "equipment")}/>
					))}
				</List>
			)
		}
	}

	render() {

		const {
			basic,
			currentInput,
			currentStep,
			recipe
		} = this.state;

		return (
			<div>
				<Nav />

				<div className={styles.createBrewBody} >
					<div className={classnames(styles.createBrewStep, styles.formContainer, styles[`step-${currentStep}`])}>
						{	
							currentStep === 0 &&
							<form>
								<TextInput 
									onChange={(name) => this.updateBasic({name})}  
									className={styles.createBrewInput} 
									placeholder="Name"
									value={basic.name}
								/>
								<TextInput 
									onChange={(style) => this.updateBasic({style})} 
									className={styles.createBrewInput} 
									placeholder="Style"
									value={basic.style}
								/>
								<TextArea 
									onChange={(description) => this.updateBasic({description})} 
									className={styles.createBrewTextArea} 
									placeholder="Description"
									value={basic.description}
								/>
							</form>
						}
						{	
							currentStep === 1 &&
							<form onSubmit={this.addIngredient}>
								<TextInput 
									onChange={(name) => this.updateCurrent({name})}  
									className={styles.createBrewInput} placeholder="Ingredient"
									value={currentInput.name}
								/>
								<TextInput 
									onChange={(quantity) => this.updateCurrent({quantity})} 
									className={styles.createBrewInput} placeholder="Quantity"
									value={currentInput.quantity}
								/>
								<button>Add</button>
							</form>
						}
						{	
							currentStep === 2 &&
							<form onSubmit={this.addEquipment}>
								<TextInput 
									onChange={(equipment) => this.updateCurrent({equipment})}  
									className={styles.createBrewInput} placeholder="Item Name"
									value={currentInput.equipment}
								/>
								<button>Add</button>
							</form>
						}
						{	
							currentStep === 3 &&
							<form onSubmit={this.addStep}>					
								<TextArea
									onChange={(instructions) => this.updateCurrent({instructions})}  
									className={styles.createBrewTextArea} placeholder={`Add you instructions for step ${this.state.recipe.steps.length + 1}`}
									value={currentInput.instructions}
								/>
								<NumberInput value={currentInput.days} label="Days" onChange={(days) => this.updateCurrent({days})} />
								<NumberInput value={currentInput.hours} label="Hours" onChange={(hours) => this.updateCurrent({hours})} />
								<NumberInput value={currentInput.minutes} label="Minutes" onChange={(minutes) => this.updateCurrent({minutes})} />
								<button>Add</button>
							</form>
						}
						{
							this.renderList()
						}
					</div>

					<PrevNext 
						className={styles.prevNext} 
						onClick={this.changeStep} 
						index={this.state.currentStep} 
						listLength={steps.length}
					/>
				</div>

				<SideContainer>
					<CreateBrewSteps>
						{
							steps.map((step, i) => <StepIcon name={step} index={i} onClick={this.changeStep} />)
						}
					</CreateBrewSteps>
				</SideContainer>
			</div>
		);
	}
};

export default CreateBrew;