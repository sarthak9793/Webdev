// We are creating a Lucky N game, where we will roll numDice dice and if the sum of all die's is equal to N(target) then we win. We will learn about designing components through this exercise. The highest level component will obviously be App, App will render LuckyN, LuckyN will render Dice and Dice will render numDice Die components. 

/* Ruminating about design:
1. Die: 
    Description: The most basic component will be our die component. It is very simple. It just expects a value and renders that value in a div that vaguely looks like a die. Purely presentational
    Props: dieValue(number)
    State: none i.e. stateless
    Events: none
2. Dice:
    Description: It will render a bunch of die components based on the diceValues it gets
    Props: diceValues(array) - it will be passed a state from LuckyN which will contain all of the value of dice
    State: none i.e. stateless
    Events: none
3. LuckyN:
    Description: contains the game logic
    Props: niceDice(number) - specifies the number of dices, target - the number we are trying to sum up to
    State: diceValues i.e. stateful. This component needs to be statefull because this component contains the game logic. So if this component contains the game logic, that means I need to do my comparisons here and know all of the die rolls in this component to figure out if player won or not and since we cant pass state upwards, the state needs to live here.
    Events: roll() - re-roll the dice
We will use the bottom up approach while designing
*/

// State design principle: An important question arises where should the diceValues state live. It might seem that the diceValues state should live in each of the Die components, but that is problematic because in react there is no way to pass state up, i.e. we cannot pass state from Die to Dice and then to LuckyN to check if the sum is equal to N. We can however pass down states as props to children components. Hence we have a state design principle: "Lift state as high as needed but no higher". In this case we the diceValues state will live in the LuckyN component. Another sideeffect of this directional dataflow is that we cannot change state from lower-level components because as we learnt that data only flows down not up

// Decoupling logic from presentation: Generally we should aim to have components of two types: 1. Presentational - Doesn't have state; is primarily about appearance/UI, 2. Logic - Has state or related logic; isn't about specific UI

// NOTE: Earlier out game was about checking if the sum was equal to the target number, but to demonstrate that we can functions as props, colt changed the code such that now we can pass the winCheck function to LuckyN component as prop.