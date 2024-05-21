'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button, Modal, Textarea } from 'keep-react'
import { FiPlusCircle } from 'react-icons/fi'

export default function ModalComponent () {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return(
        <div>
            <span onClick={openModal} className='select-none text-slate-400 focus:text-white focus:shadow-none active:text-white'><FiPlusCircle /></span>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Body className="space-y-3">
                <div className='flex flex-row items-center gap-3'>
                    <Modal.Icon>
                        <Image src="/FotoPerfil.jpg" alt="PIO logo" width={100} height={100} className="rounded-full"/>
                    </Modal.Icon>
                    <Modal.Content>
                        <p>Yilbert Luna</p>
                    </Modal.Content>
                </div>
                <Modal.Content>
                    <Textarea placeholder="Write your message here." />
                </Modal.Content>
                <Modal.Footer>
                    <Button onClick={closeModal} size="sm" variant="outline" color="secondary">
                    Cancel
                    </Button>
                    <Button onClick={closeModal} size="sm" color="primary">
                    Confirm
                    </Button>
                </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div>
    )
}