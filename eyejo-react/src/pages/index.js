import React, { PureComponent } from 'react'
import { Redirect } from 'umi'
import { withI18n } from '@lingui/react'

@withI18n()
class Index extends PureComponent {
  render() {
    const { i18n } = this.props
    return <Redirect to={i18n.t`/project`} />
  }
}

export default Index
