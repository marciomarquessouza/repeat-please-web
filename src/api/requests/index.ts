import axios, { AxiosRequestConfig } from 'axios';

interface IRequesProps {
	url: string;
	headers?: { [key: string]: string | number };
	params?: { [key: string]: string | number };
	body?: unknown;
}

async function requestResponse<T>(config: AxiosRequestConfig) {
	try {
		const response = await axios.request<T>(config);
		if (![200, 201].includes(response.status)) {
			throw new Error(
				`response with status ${response.status} - ${JSON.stringify(response)}`,
			);
		}
	} catch (error) {
		throw new Error(`Error to request ${config.url}: ${error.message}`);
	}
}

async function get<T>({ url, headers, params }: IRequesProps) {
	const config: AxiosRequestConfig = {
		method: 'GET',
		url,
		headers,
		params,
	};

	requestResponse<T>(config);
}

async function post<T>({ url, headers, body }: IRequesProps) {
	const config: AxiosRequestConfig = {
		method: 'POST',
		url,
		headers,
		data: body,
	};

	requestResponse<T>(config);
}

async function put<T>({ url, headers, body }: IRequesProps) {
	const config: AxiosRequestConfig = {
		method: 'PUT',
		url,
		headers,
		data: body,
	};

	requestResponse<T>(config);
}

async function patch<T>({ url, headers, body }: IRequesProps) {
	const config: AxiosRequestConfig = {
		method: 'PATCH',
		url,
		headers,
		data: body,
	};

	requestResponse<T>(config);
}

async function remove<T>({ url, headers, params }: IRequesProps) {
	const config: AxiosRequestConfig = {
		method: 'DELETE',
		url,
		headers,
		params,
	};

	requestResponse<T>(config);
}

export default { get, post, put, patch, remove };
