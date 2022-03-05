
import React from 'react'
import Card from './Card'

function ExerciseList (props) {

    return (
        <div>
            {
                props.exercises.map((Exercises) => {
                    return(
                        <Card
                            title = { Exercises.title }
                            description = { Exercises.description }
                            img = { Exercises.img }
                            leftColor = { Exercises.leftColor }
                            rigthColor = { Exercises.rightColor }
                        />
                    )
                })
            }
        </div>

    )

}

export default ExerciseList