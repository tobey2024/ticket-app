"use client"
import { useRouter} from 'next/navigation'
import { useState } from 'react'

const TicketForm = () => {
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem"
    }


const [formData, setFormData] = useState(startingTicketData);

const handleChange = (e) => {
    const value = e.target.value;
    const name= e.target.name;

    setFormData((prev) =>({
        ...prev, [name]: value
    }));
}
  return (
    <div className='flex justify-center'>
        <form className='flex flex-col gap-3 w-1/2' method='post'>
            <h3>Create Your Ticket</h3>
            <label>Title</label>
            <input 
                id='title' 
                name='title'
                type="text" 
                onChange={handleChange}
                required={true}
                value={formData.title}
            />
        </form>
    </div>
  )
}

export default TicketForm