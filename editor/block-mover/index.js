/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import IconButton from 'components/icon-button';

/**
 * Internal dependencies
 */
import './style.scss';
import { isFirstBlock, isLastBlock } from '../selectors';

function BlockMover( { onMoveUp, onMoveDown, isFirst, isLast } ) {
	// We emulate a disabled state because forcefully applying the `disabled`
	// attribute on the button while it has focus causes the screen to change
	// to an unfocused state (body as active element) without firing blur on,
	// the rendering parent, leaving it unable to react to focus out.

	return (
		<div className="editor-block-mover">
			<IconButton
				className="editor-block-mover__control"
				onClick={ isFirst ? null : onMoveUp }
				icon="arrow-up-alt2"
				aria-disabled={ isFirst }
			/>
			<IconButton
				className="editor-block-mover__control"
				onClick={ isLast ? null : onMoveDown }
				icon="arrow-down-alt2"
				aria-disabled={ isLast }
			/>
		</div>
	);
}

export default connect(
	( state, ownProps ) => ( {
		isFirst: isFirstBlock( state, ownProps.uid ),
		isLast: isLastBlock( state, ownProps.uid ),
	} ),
	( dispatch, ownProps ) => ( {
		onMoveDown() {
			dispatch( {
				type: 'MOVE_BLOCK_DOWN',
				uid: ownProps.uid,
			} );
		},
		onMoveUp() {
			dispatch( {
				type: 'MOVE_BLOCK_UP',
				uid: ownProps.uid,
			} );
		},
	} )
)( BlockMover );
