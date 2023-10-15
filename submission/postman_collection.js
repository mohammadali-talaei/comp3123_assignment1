{
	"info": {
		"_postman_id": "c7614a7e-4298-4f06-aba4-bc383455d4ef",
		"name": "Nodejs_assignment1",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "18468301"
	},
	"item": [
		{
			"name": "Employee",
			"item": [
				{
					"name": "Get Employees",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8002/api/v1/emp/employees",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"emp",
								"employees"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Employee Details",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8002/api/v1/emp/employees/652c02ea96719b62a483d7fd",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"emp",
								"employees",
								"652c02ea96719b62a483d7fd"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Employee",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8002/api/v1/emp/employees/652c02ea96719b62a483d7fd",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"emp",
								"employees",
								"652c02ea96719b62a483d7fd"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update Employee",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstname\": \"Mohammad ali\",\n    \"lastname\": \"Talaei\",\n    \"gender\": \"female\",\n    \"email\": \"altalaie@gmail.com\",\n    \"salary\": 3500\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8002/api/v1/emp/employees/652c02ea96719b62a483d7fd",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"emp",
								"employees",
								"652c02ea96719b62a483d7fd"
							]
						}
					},
					"response": []
				},
				{
					"name": "Add Employee",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstname\": \"Mohammadali\",\n    \"lastname\": \"Talaei\",\n    \"email\": \"altalaie@gmail.com\",\n    \"gender\": \"male\",\n    \"salary\": 3500\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8002/api/v1/emp/employees",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"emp",
								"employees"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "User Signup",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"username\": \"mohammadali-talaei\",\n    \"password\": \"12345\",\n    \"email\": \"altalaie2@gmail.com\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8002/api/v1/user/signup",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"user",
								"signup"
							]
						}
					},
					"response": []
				},
				{
					"name": "User Login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"username\": \"mohammadali-talaei\",\n    \"password\": \"12345\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8002/api/v1/user/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"api",
								"v1",
								"user",
								"login"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}