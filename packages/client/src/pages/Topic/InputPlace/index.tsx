import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import './index.css'

export function InputPlace() {
  return (
    <form className="input-place">
      <Input
        name="text-message"
        className="full-width"
      />
      <Button text="" className="send-message-btn" type="submit" />
    </form>
  )
}
