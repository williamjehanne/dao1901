import React from "react"
import {Button, Form} from 'reactstrap'
import {Field, reduxForm} from 'redux-form'
import {Input, TextArea} from '../../common/Inputs'
// ------------------------------------
// Validation
// ------------------------------------
const validate = values => {
  const errors = {}
  if (!values.proposalDescription) {
    errors.proposalDescription = 'Required'
  } else if (values.proposalDescription.length >= 600) {
    errors.proposalDescription = 'Description length must be 600 char max'
  }
  if (!values.proposalDeadline) {
    errors.proposalDeadline = 'Required'
  } else if (!Number.isInteger(Number(values.proposalDeadline))) {
    errors.proposalDeadline = 'Proposal deadline must be a number (number of days)'
  }
  return errors
}
// ------------------------------------
// Form
// ------------------------------------
let ProposalSubmissionForm = props => {
  const {createProposal, handleSubmit, submitSucceeded, clearSubmit} = props
  return (
    <div id="proposalSubmissionForm" className="form">
      <Form onSubmit={handleSubmit(createProposal)}>
        <div className="row">
          <div className="col-12">
            <Field
              component={TextArea}
              id="proposalDescriptionInput"
              placeholder="Enter description of the proposal"
              type="textarea"
              label="Proposal Description"
              name="proposalDescription"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Field
              component={Input}
              id="proposalDeadlineInput"
              label="Days until deadline"
              name="proposalDeadline"
              type="text"
              placeholder="Enter the number of days until the deadline"
            />
          </div>
        </div>

        <Button
          block
          color="primary"
          outline
          size="lg"
          className="m-top-20"
          type="submit"
        >
          {'Submit'}
        </Button>
      </Form>
    </div>
  )
}
export default ProposalSubmissionForm = reduxForm({
  form: 'proposalSubmission',
  validate,
})(ProposalSubmissionForm)