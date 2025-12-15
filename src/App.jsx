import React, { useState } from "react";
import HelloSudent from "./Day 42/Task1";
import StudentDetails from "./Day 42/Task2";
import Message from "./Day 42/Task3";
import Button from "./Day 42/Task4";
import Card from "./Day 42/Task5";
import ProfileCard from "./Day 42/Task6";
import SimpleButton from "./Day 42/Task7";
import ProductItem from "./Day 42/Task8";
import Layout from "./Day 42/Task9";
import Header from "./Day 42/Task10";
import Counter from "./Day 43/Task1";
import InputBox from "./Day 43/Task2";
import Toggle from "./Day 43/Task3";
import EvenOdd from "./Day 43/Task4";
import ColorChange from "./Day 43/Task5";
import LoginForm from "./Day 43/Task6";
import ThemeSwitcher from "./Day 43/Task7";
import CounterReset from "./Day 43/Task8";
import Dropdown from "./Day 43/Task9";
import TodoApp from "./Day 43/Task10";
import LoginStatus from "./Day 44/Task1";
import Premium from "./Day 44/Task2";
import CityList from "./Day 44/Task3";
import City from "./Day 44/Task4";
import Data from "./Day 44/Task5";
import TodoList from "./Day 44/Task6";
import Todo from "./Day 44/Task7";
import UserList from "./Day 44/Task8";
import NotificationBadge from "./Day 44/Task9";
import StudentAttendance from "./Day 44/Task10";
import Greeting from "./Day 45/Task1";
import Uppercase from "./Day 45/Task2";
import Checkbox from "./Day 45/Task3";
import Country from "./Day 45/Task4";
import Password from "./Day 45/Task5";
import Login from "./Day 45/Task6";
import RegistrationForm from "./Day 45/Task7";
import ProfileUpdateForm from "./Day 45/Task8";
import ValidatedForm from "./Day 45/Task9";
import FeedbackForm from "./Day 45/Task10";


function SimpleCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
   <HelloSudent />
  <StudentDetails/>
  <Message/>
  <Button text="Click Me"/>
 
   
     <Card>
        <h2>Hello!</h2>
        <button>Click Me</button>
      </Card>

      <ProfileCard
        name="Kaviya"
        job="Frontend Developer"
        avatar="https://icon0.com/free/static2/preview2/stock-photo-beautiful-businesswoman-avatar-people-icon-character-cartoon-32612.jpg"/>
  
        <SimpleButton text="Click Me" color="grey" size="10px 20px" />
        <SimpleButton text="Submit" color="skyblue" size="12px 25px" />
        <SimpleButton text="Delete" color="red" size="15px 30px" />
  
         <ProductItem title="Laptop" price={12000} />
         <ProductItem title="Headphones" price={1200} />
         <ProductItem title="Smartphone" price={20000} />
  
         <Layout>
         <h2>Welcome to my website!</h2>
         </Layout>
  
  
          <main style={{ padding: "20px", textAlign: "center" }}>
          <h2>Welcome all!</h2>
          </main>  
          
          <Counter />
          <InputBox/>
          <Toggle/>
          <EvenOdd/>
          <ColorChange/>
          <LoginForm/>
          <ThemeSwitcher />
          <CounterReset/>
          <Dropdown/>
          <TodoApp/>
          <LoginStatus/>
          <Premium/>
          <CityList/>
          <City/>
          <Data/>
          <TodoList/>
          <Todo/>
          <UserList/>
          <NotificationBadge/>
          <StudentAttendance/>
          <Greeting/>
          <Uppercase/>
          <Checkbox/>
          <Country/>
          <Password/>
          <Login/>
          <RegistrationForm/>
          <ProfileUpdateForm/>
          <ValidatedForm/>
          <FeedbackForm/>





  </>

  );
}

export default SimpleCheckbox;
