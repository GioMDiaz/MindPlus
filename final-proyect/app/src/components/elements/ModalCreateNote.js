import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import "./ModalCreateNote.sass"
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi"
import {BiHappyBeaming, BiHappy} from "react-icons/bi"
import {RiEmotionNormalLine} from "react-icons/ri"
import { createNote } from '../../logic'

const ModalCreateNote = ({onClose}) => {
  const [mood, setMood] = useState()

  const handleClickExcelent = () => {
      setMood("5")
  }

  const handleClickVeryGood = () => {
    setMood("4")
  }

  const handleClickGood = () => {
      setMood("3")
  }

const handleClickNotSoBad = () => {
    setMood("2")
}

const handleClickBad = () => {
  setMood("1")
}

  const handleSubmit = (event) => {
      event.preventDefault()

      const { target: { text: { value: text } } } = event

      try {
          createNote(sessionStorage.token, text, mood)
              .then(() => {
                  alert("Your daily note has been created")
                  onClose()
              })
              .catch(() => alert("Uh Oh, you must choice a mood"))

      } catch (error) {
          alert("Please, write a note")
      }
  }
  return (
    <Modal onClose={onClose}>
      <form className='modal__form' onSubmit={handleSubmit}>
        <textarea name="text" placeholder='Write your daily note' className='modal__text-area'></textarea>
        <div className='icons'>
          <div className='container__icon'>
            <BiHappyBeaming onClick={handleClickExcelent} className='icon__excelent' />
            <p className='text__icon'>Excelent</p>
          </div>
          <div className='container__icon'>
            <BiHappy onClick={handleClickVeryGood} className='icon__very-good'/>
            <p className='text__icon'>Very Good</p>
          </div>
          <div className='container__icon'>
            <HiOutlineEmojiHappy onClick={handleClickGood}  className='icon__good' />
            <p className='text__icon'>Good</p>
          </div>
          <div className='container__icon'>
            <RiEmotionNormalLine onClick={handleClickNotSoBad} className='icon__not-so-bad'/>
            <p className='text__icon'>Not so bad</p>
          </div>
          <div className='container__icon'>
            <HiOutlineEmojiSad onClick={handleClickBad}className='icon__regular'/>
            <p className='text__icon'>Regular</p>
          </div>
        </div>
        <Button type="submit">Confirm</Button>
      </form>
    </Modal>
  )
}

export default ModalCreateNote