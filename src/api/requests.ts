import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../config';

interface IRequesProps {
	url: string;
	headers?: { [key: string]: string | number };
	params?: { [key: string]: string | number };
	body?: unknown;
}

const api = axios.create({
	baseURL: API_URL,
});

async function requestResponse<T>(config: AxiosRequestConfig): Promise<T> {
	try {
		const response = await api.request<T>(config);

		if (![200, 201].includes(response.status)) {
			throw new Error(
				`response with status ${response.status} - ${JSON.stringify(response)}`,
			);
		}
		return response.data;
	} catch (error) {
		throw new Error(`Error to request ${config.url}: ${error.message}`);
	}
}

async function get<T>({ url, headers, params }: IRequesProps): Promise<T> {
	const config: AxiosRequestConfig = {
		method: 'GET',
		url,
		headers,
		params,
	};

	return requestResponse<T>(config);
}

async function post<T>({ url, headers, body }: IRequesProps): Promise<T> {
	const config: AxiosRequestConfig = {
		method: 'POST',
		url,
		headers,
		data: body,
	};

	return requestResponse<T>(config);
}

async function put<T>({ url, headers, body }: IRequesProps): Promise<T> {
	const config: AxiosRequestConfig = {
		method: 'PUT',
		url,
		headers,
		data: body,
	};

	return requestResponse<T>(config);
}

async function patch<T>({ url, headers, body }: IRequesProps): Promise<T> {
	const config: AxiosRequestConfig = {
		method: 'PATCH',
		url,
		headers,
		data: body,
	};

	return requestResponse<T>(config);
}

async function remove<T>({
	url,
	headers,
	params,
}: IRequesProps): Promise<void> {
	const config: AxiosRequestConfig = {
		method: 'DELETE',
		url,
		headers,
		params,
	};

	requestResponse<T>(config);
}

export default { get, post, put, patch, remove };
