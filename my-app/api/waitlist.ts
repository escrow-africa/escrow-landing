import axios from "axios";
import api from "./axios";

export interface WaitlistPayload {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
}

export async function submitWaitlist(payload: WaitlistPayload) {
	try {
		await api.post("/auth/waitlist", payload);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const message = error.response?.data?.message;

			throw new Error(
				typeof message === "string"
					? message
					: "Unable to join the waitlist. Please try again."
			);
		}

		throw error;
	}
}
