import { TopicsList } from './TopicList'
import { ForumHeader } from './ForumHeader'

export function Forum() {
  return (
    <div className="topics-wrapper">
      <ForumHeader />
      <TopicsList />
    </div>
  )
}
