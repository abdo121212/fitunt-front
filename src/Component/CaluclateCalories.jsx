import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function CaluclateCalories() {


    const [calories, setCalories] = useState(null)

    const caluclateCalories = async () => {
        const { data } = await axios.post("https://abdo121212-fit-nutrition.onrender.com/calories/calculate", {}, {
            headers: { token: localStorage.getItem("token") }
        })


        setCalories(data.BMR)
    }




    useEffect(() => {

        caluclateCalories()

    })

    return (
        <section className='h-screen w-full pt-28'>
            <h4 className="text-center py-10 text-main text-3xl font-medium">  Recommended Caloires intake</h4>



            <div className='text-6xl font-bold text-green-600 text-center' style={{ fontFamily: 'Blazed, sans-serif' }}>  {calories && calories.toFixed(2)}</div>


            <div className='pt-20  text-center '>
                <Link to={'/profile'} className="bg-main px-4 py-3 rounded-lg w-1/4 text-2xl font-medium text-white " >

                    Profile
                </Link>
            </div>


        </section>
    )
}
