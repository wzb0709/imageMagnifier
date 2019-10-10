/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styles from './styles.css'

export interface IProps {
  url: string,
  width?: number | string,
  height?: number | string,
  scale?: number,
  style?: React.CSSProperties;
}

export interface IState {
  visible: boolean,
  left: number,
  top: number,
  scale_width: number
}

export default class ExampleComponent extends React.Component<IProps, IState> {


  state = {
    visible: false,
    left: 0,
    top: 0,
    scale_width: 0,
  }

  handleGetImageWidth = (e: any) => {
    const scale = this.props.scale || 3
    this.setState({scale_width: e.target.width * scale})
  }

  handleMouseEnter = () => {
    this.setState({visible: true})
  }

  handleMouseLeave = () => {
    this.setState({visible: false})
  }

  handleMouseMove = (e: any) => {
    const {offsetX, offsetY} = e.nativeEvent
    this.setState({
      left: offsetX,
      top: offsetY,
    })
  }

  render() {
    const {url, width, height} = this.props
    const {left, top, scale_width} = this.state
    const scale: number = this.props.scale || 3
    return (
      <>
        <div
          className={styles.surrounded_div}
          style={{
            ...this.props.style,
            width: width || "auto",
            height: height || "auto",
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
        >
          <img onLoad={this.handleGetImageWidth} alt='' src={url} className={styles.image}/>
          {this.state.visible && <div className={styles.magnifier} style={{
            left: left - 60,
            top: top - 60,
          }}>
            <img
              alt=''
              src={url}
              style={{
                width: scale_width,
                position: "absolute",
                left: 60 - (left * scale),
                top: 60 - (top * scale)
              }}
            />
          </div>}
        </div>
      </>
    )
  }
}
