/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress dependencies
 */
import Panel from 'components/panel';
import PanelHeader from 'components/panel/header';
import PanelBody from 'components/panel/body';

/**
 * Internal Dependencies
 */
import './style.scss';
import { deselectBlock } from '../../actions';
import { getSelectedBlock } from '../../selectors';

const BlockInspector = ( { selectedBlock, ...props } ) => {
	if ( ! selectedBlock ) {
		return null;
	}

	const onDeselect = ( event ) => {
		event.preventDefault();
		props.deselectBlock( selectedBlock.uid );
	};

	const header = (
		<strong>
			<a href="" onClick={ onDeselect } className="editor-block-inspector__deselect-post">Post</a> → Block
		</strong>
	);

	return (
		<Panel>
			<PanelHeader label={ header } />
			<PanelBody>
				<div>{ selectedBlock.blockType } settings...</div>
				<ul>
					{ Object.keys( selectedBlock.attributes ).map( ( attribute, index ) => (
						<li key={ index }>{ attribute }: { selectedBlock.attributes[ attribute ] }</li>
					) ) }
				</ul>
			</PanelBody>
		</Panel>
	);
};

export default connect(
	( state ) => {
		return {
			selectedBlock: getSelectedBlock( state ),
		};
	},
	{ deselectBlock }
)( BlockInspector );
