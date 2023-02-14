import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'


const Question = () => {
    const [showQuestion, setShowQuestipn] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [storedOption, setStoresOption] = useState([])
    const [validOption, setValidOption] = useState(false)
    const [wrngAnswer, setWrngAnswer] = useState(false)
    const [rightAns, setRightAns] = useState(false)
    const [notSlected, setNotSelected] = useState(false)
    useEffect(() => {
        setTimeout(function () {
            setShowQuestipn(true)
        }, 10000)
    })

    useEffect(() => {
        setTimeout(function () {
            setShowOptions(true)
        }, 15000)
    })

    function handleChange(e) {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setStoresOption([...storedOption, value])

        }
        else {
            setStoresOption(storedOption.filter((e) => e !== value))
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(storedOption)
        if (storedOption.length > 2) {
            console.log("Error")
            setValidOption(true)
            setWrngAnswer(false)
            setRightAns(false)
            setNotSelected(false)

        }
        else if (storedOption.includes('B' && 'C')) {
            console.log('right ans')
            setRightAns(true)
            setWrngAnswer(false)
            setValidOption(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('A' && 'D')) {
            console.log('WRONG ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('A' && 'B')) {
            console.log('WRONG ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('A' && 'C')) {
            console.log('WRONG ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('C' && 'D')) {
            console.log('WRONG ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('A' || 'D')) {
            console.log('WRONG ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('C')) {
            console.log('WRONG ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.includes('D')) {
            console.log('wrong ans')
            setWrngAnswer(true)
            setValidOption(false)
            setRightAns(false)
            setNotSelected(false)
        }
        else if (storedOption.length == 0) {
            console.log("Please Select valid option")
            setNotSelected(true)
            setWrngAnswer(false)
            setValidOption(false)
            setRightAns(false)

        }
    }


    return (
        <>
            <div className={styles.quetion}>
                {showQuestion ? <div> Britain’s First Activists attend the hotel and attempt to question <br /> one of the service users outside of the premises; what would you do?</div> : <></>}
            </div>
            {showOptions ? <div className={styles.option}>
                <form onSubmit={handleSubmit}>
                    <ol className={styles.options}>
                        <li>  <label><input type="checkbox" name='option1' value='A' onChange={handleChange}
                        />
                            Arrange a suitable for them to discuss atmosphere to talk.
                        </label>
                        </li>
                        <li>   <label><input type="checkbox" name='option2' value='B' onChange={handleChange}
                        />
                            Raise an urgent incident report.</label></li>
                        <li> <label><input type="checkbox" name='option3' value='C' onChange={handleChange} /> Call the police.</label></li>
                        <li> <label><input type="checkbox" name='option4' value='D' onChange={handleChange} />Call your line manager to inform the incident.</label></li>
                    </ol>
                    <div className={styles.submitButContainer}>
                        <button type='submit' className={styles.submitBut} >Submit</button>
                    </div>
                </form>

                {validOption ? <div className={styles.warning}>
                    <p>Please Select any two options</p>
                </div> : <></>}
                {wrngAnswer ? <div className={styles.warning}>
                    <p>Oops!!You got wrong answer</p>
                </div> : <></>}
                {rightAns ? <div className={styles.warning}>
                    <p>Right Answer!</p>
                </div> : <></>}
                {notSlected ? <div className={styles.warning}>
                    <p>Please select the Valid Option</p>
                </div> : <></>}
            </div> : <></>}



        </>
    )
}

export default Question