import React, {Component} from 'react';
import style from "./Button.module.css"

import { motion } from "framer-motion"

class LargeButton extends Component {
    render() {
        return (
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={this.props.disabled}
                className={style.largeButton}
                style={this.props.style}
                onClick={this.props.onClick}>
                {this.props.text}
            </motion.button>
        );
    }
}

export default LargeButton;