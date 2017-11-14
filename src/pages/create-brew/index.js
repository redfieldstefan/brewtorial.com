import React, { Component } from "react";
import classnames from "classnames";
import CreateBrewSteps from "../../components/create-brew-steps";
import EquipmentLi from "../../components/list-items/equipment";
import Helmet from "react-helmet";
import IngredientLi from "../../components/list-items/ingredient";
import Nav from "../../components/nav";
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
			recipe: {
				ingredients: [],
				equipment: []
			}
		};

		this.addIngredient = this.addIngredient.bind(this);
		this.addEquipment = this.addEquipment.bind(this);
		this.changeStep = this.changeStep.bind(this);
		this.remove = this.remove.bind(this);
		this.updateCurrent = this.updateCurrent.bind(this);
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

	addIngredient(e) {
		e.preventDefault();
		const currentIngredient = this.state.currentInput;
		const ingredientContent = currentIngredient.name && currentIngredient.quantity;

		if(ingredientContent && this.state.recipe.ingredients.indexOf(currentIngredient) < 0) {		
			const ingredients = [...this.state.recipe.ingredients, currentIngredient];

			this.setState({
				recipe: {
					...this.state.recipe,
					ingredients
				},
				currentInput: {}
			})
		}
	}

	addEquipment(e) {
		e.preventDefault();
		const currentEquipment = this.state.currentInput;


		if(currentEquipment && this.state.recipe.equipment.indexOf(currentEquipment) < 0) {		
			const equipment = [...this.state.recipe.equipment, currentEquipment];
			console.log(currentEquipment)

			this.setState({
				recipe: {
					...this.state.recipe,
					equipment
				},
				currentInput: {}
			})
		}
	}

	remove(forRemoval, list) {
		const newList = this.state.recipe[list].filter((item, index) => index !== forRemoval );

		this.setState({
			recipe: {				
				...this.state.recipe,
				[list]: newList
			}
		})
	}

	render() {

		const {
			currentInput,
			currentStep,
			recipe
		} = this.state;

		return (
			<div>
				<Helmet>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400" rel="stylesheet" />
				</Helmet>
				<Nav />

				<div className={styles.createBrewBody} >
					{	
						currentStep === 0 &&
						<div className={styles.createBrewStep}>
							<form>
								<TextInput className={styles.createBrewInput} placeholder="Name"/>
								<TextInput className={styles.createBrewInput} placeholder="Style"/>
								<TextArea className={styles.createBrewTextArea} placeholder="Description"/>
							</form>
						</div>
					}
					{	
						currentStep === 1 &&
						<div className={styles.createBrewStep}>
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

							<ul className={styles.ingredientsList}>
								{recipe.ingredients.map((ingredient, i) => (
									<IngredientLi ingredient={ingredient} index={i} onClick={() => this.remove(i, "ingredients")}/>
								))}
							</ul>
						</div>
					}
					{	
						currentStep === 2 &&
						<div className={styles.createBrewStep}>
							<form onSubmit={this.addEquipment}>
								<TextInput 
									onChange={(equipment) => this.updateCurrent({equipment})}  
									className={styles.createBrewInput} placeholder="Item Name"
									value={currentInput.equipment}
								/>
								<button>Add</button>
							</form>

							<ul className={styles.ingredientsList}>
								{recipe.equipment.map((equipment, i) => (
									<EquipmentLi item={equipment} index={i} onClick={() => this.remove(i, "equipment")} />
								))}
							</ul>
						</div>
					}
					{	
						this.state.currentStep === 3 &&
						<div className={styles.createBrewStep}>4</div>
					}

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