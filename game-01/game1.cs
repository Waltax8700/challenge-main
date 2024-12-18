using System;
using System.Linq;
using System.Collections.Generic;

public class Game1
{
    public static void Main(string[] args)
    {
        //declarar el array de numeros
        var inputArray = new int[] {4, 8, 2, 6, 15};
        
        //declarar el numero que desea buscar
        int inputNumber = 8; 
        
        var output = FindNumbersInArray(inputArray, inputNumber);
        
        if(output.Any())
            Console.WriteLine("Resultado: " + string.Join(", ",output));
        else
            Console.WriteLine($"No hay valores que sumen {inputNumber}");
        
    }

    public static  int[] FindNumbersInArray(int[] arr, int number){
        var seenNumbers = new HashSet<int>();
    
        for(int i=0; i<arr.Length; i++){
            var complement = number - arr[i];
            
            if (seenNumbers.Contains(complement))
                return new int[] { arr[i], complement };
            
            seenNumbers.Add(arr[i]);
        }
        
        return new int[]{};
    }
}