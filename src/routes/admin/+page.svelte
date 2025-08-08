<script lang="ts">
	import { createAppointment, getAppointments } from '$lib/remote/appointments.remote'

	const appointments = $derived(await getAppointments())

	let newAppointmentFields = $state({
		name: '',
		email: '',
		phone: '',
		requestedTime: '',
	})
</script>

<table class="table">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Email</th>
			<th>Phone Number</th>
			<th>Requested Time</th>
		</tr>
	</thead>
	<tbody>
		{#each appointments as appointment (appointment.id)}
			<tr>
				<td>{appointment.id}</td>
				<td>{appointment.name}</td>
				<td>{appointment.email}</td>
				<td>{appointment.phone}</td>
				<td>{appointment.requestedTime}</td>
			</tr>
		{/each}
	</tbody>
</table>

<form>
	<label for="name">Name:</label>
	<input type="text" id="name" name="name" required bind:value={newAppointmentFields.name} />

	<label for="email">Email:</label>
	<input type="email" id="email" name="email" required bind:value={newAppointmentFields.email} />

	<label for="phone">Phone Number:</label>
	<input type="tel" id="phone" name="phone" required bind:value={newAppointmentFields.phone} />

	<label for="requestedTime">Requested Time:</label>
	<input type="date" id="requestedTime" name="requestedTime" required bind:value={newAppointmentFields.requestedTime} />

	<button type="button" onclick={() => createAppointment(newAppointmentFields)}>Add Appointment</button>
</form>
