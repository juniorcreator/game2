export default{

	bind (el, bindings, vnode){
		el.style[bindings.arg] = bindings.value;
		const args = bindings.modifiers;
		if (args.textcenter) {
			el.style.textAlign = 'center';
		}
	},
	 unbind () {

	 }
}