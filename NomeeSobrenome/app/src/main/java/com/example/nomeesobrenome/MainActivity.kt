package com.example.nomeesobrenome

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    private var generatedName = ""
    private var names = Nomes()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        names.nomes = listOf("Jonathan", "James", "Lucas")
        names.sobrenomes = listOf("Calleri", "Rodriguez", "Moura")

        val generateButton = findViewById<Button>(R.id.generateButton)
        generateButton.setOnClickListener() { generateRandomName() }

        val addNameButton = findViewById<Button>(R.id.addNameButton)
        addNameButton.setOnClickListener() {
            addName(getNameInput())
            resetNameInput()
        }

        val addSurnameButton = findViewById<Button>(R.id.addSurnameButton)
        addSurnameButton.setOnClickListener() {
            addSurname(getNameInput())
            resetNameInput()
        }
    }

    fun generateRandomName () {
        generatedName = names.generateRandomName()
        val nameText = findViewById<TextView>(R.id.nameText)
        nameText.text = generatedName
        findViewById<TextView>(R.id.initialText).text = getString(R.string.initial_message_success)
    }

    fun addName (name: String) {
        names.nomes += listOf(name)
        names.nomes = names.nomes.distinct()
    }

    fun addSurname (surname: String) {
        names.sobrenomes += listOf(surname)
        names.nomes = names.nomes.distinct()
    }

    fun getNameInput(): String {
        val nameInput = findViewById<EditText>(R.id.nameInput)
        return nameInput.text.toString()
    }

    fun resetNameInput() {
        val nameInput = findViewById<EditText>(R.id.nameInput)
        nameInput.setText("")
    }
}