open class Robot{
    open fun ejecutarMision(){
        println("Ejecutando misión general")

    }
}

class RobotCombate : Robot(){
    override fun ejecutarMision(){
        println("Defendiendo el laboratorio")

    }
}

class RobotExplorador : Robot(){
    override fun ejecutarMision(){
        println("Explorando nuevos planetas")

    }
}   


fun main(){
    val robot1 = RobotCombate()
    val robot2 = RobotExplorador()
    robot1.ejecutarMision()
    robot2.ejecutarMision()
}