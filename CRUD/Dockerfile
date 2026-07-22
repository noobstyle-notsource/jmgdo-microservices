FROM python:3.9-slim

WORKDIR /app

# Copy application files
COPY . .

# Install dependencies (Flask and Flask-CORS/Flask-RESTx if needed)
RUN pip install --no-cache-dir flask flask-cors

# Expose port (adjust port if products.py runs on a different port like 5000 or 8080)
EXPOSE 5000

# Command to run the application
CMD ["python", "products.py"]
