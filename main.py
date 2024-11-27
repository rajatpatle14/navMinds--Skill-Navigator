import os
import json
from openai import AzureOpenAI
from dotenv import load_dotenv


load_dotenv()

OPENAI_API_VERSION = os.getenv("OPENAI_API_VERSION")
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_API_KEY = os.getenv("AZURE_OPENAI_API_KEY")

client = AzureOpenAI()

# Function to read the JSON file
def read_json_file(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data
    except Exception as e:
        print(f"Error reading JSON file: {e}")
        return None


# Function to interact with Azure OpenAI
def analyze_with_ai(json_data, system_prompt):
    try:
        # Convert JSON data to a string for passing into the AI model
        json_content = json.dumps(json_data, indent=2)
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Here is the JSON data: {json_content}"}
        ]

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.7,
            max_tokens=256,
            top_p=0.6
        )
        # return response.choices[0].message["content"]
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error interacting with Azure OpenAI: {e}")
        return None


# Main function
if __name__ == "__main__":
    file_path = "./venv/resources/response.json"
    system_prompt = "Analyze following JSON data containig student's performance. Recommend topics for improvement. " \
                    "Provide a personalized learning path with resource links for each student to strengthen their weak areas.Keep the response structured, concise, and easy to understand. "

    json_data = read_json_file(file_path)

    if json_data:
        ai_response = analyze_with_ai(json_data, system_prompt)

        if ai_response:
            print("\n Based on your assessment here are the recommended topics to focus and personalised learning path for you:\n")
            print(ai_response)
        else:
            print("Failed to get a response from Azure OpenAI..")
    else:
        print("No Assessment data found")
