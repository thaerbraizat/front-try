import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

export class Update extends Component {
  
    render() {
        return (
            <>
                <Modal show={this.props.showForm} >
                    <Modal.Header >
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>artist_display :</Form.Label>
                                <Form.Control type="text" name="des" placeholder="artist_display" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>thumbnail :</Form.Label>
                                <Form.Control type="text" name="des1" placeholder="thumbnail" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>im :</Form.Label>
                                <Form.Control type="text" name="des1" placeholder="thumbnail" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.props.hideModal}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hideModal}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default Update