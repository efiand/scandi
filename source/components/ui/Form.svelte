<script>
	import punctify from '@tools/punctify.js';

	export let action = null;
	export let className = null;
	export let disabled = false;
	export let fields = [];
	export let method = 'get';
	export let submitTitle = '';

	const SuccessData = {
		BUTTON_TEXT: 'Добавить ещё',
		MESSAGE: 'Заявка упешно отправлена'
	};
	const ErrorData = {
		BUTTON_TEXT: 'Попробовать ещё',
		MESSAGE: 'Произошла ошибка'
	};

	let formElement = null;
	let validable = false;
	let sended = false;
	let message = '';
	let buttonText = 'OK';

	const handleResponse = (isSuccess = false) => {
		const Data = isSuccess ? SuccessData : ErrorData;

		message = Data.MESSAGE;
		buttonText = Data.BUTTON_TEXT;
		sended = true;

		if (isSuccess) {
			formElement.reset();
		}
	};

	const submitHandler = () => {
		disabled = true;

		if (formElement.checkValidity()) {
			fetch(action, { method })
				.then((res) => {
					if (res.ok) {
						handleResponse(true);
					} else {
						handleResponse();
					}
				})
				.catch(() => handleResponse());
		}

		validable = true;
		disabled = false;
	};

	const messageButtonClickHandler = () => {
		sended = false;
	};
</script>

<form
	class="form {className}"
	class:form_validable={validable}
	class:form_sended={sended}
	{action}
	{method}
	bind:this={formElement}
>
	<div class="form__body">
		{#each fields as { id, label, type, name, minlength, pattern, required, message }}
			<p class="form__group">
				<label class="visuallyHidden" for={id}>{punctify(label)}</label>
				<input
					class="form__field"
					{id}
					type={type || 'text'}
					{name}
					placeholder={label}
					{minlength}
					{pattern}
					{required}
				/>
				<span class="form__message">{message}</span>
			</p>
		{/each}
		<button
			class="form__submit button"
			type="submit"
			{disabled}
			on:click|preventDefault={submitHandler}
		>
			{submitTitle}
		</button>
	</div>

	<div class="form__res">
		<p class="form__group">{message}</p>
		<button
			class="form__submit button"
			type="button"
			on:click|preventDefault={messageButtonClickHandler}
		>
			{buttonText}
		</button>
	</div>
</form>
