package runners;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class runnerKarate {

    @Test
    void testUsuarios() {
        //===== Ejecucion por tag ===============================//
        Results results = Runner.path("src/test/resources/bdd")
                .tags("@listarusuario")
                .parallel(1);

        //===== Ejecucion de total ===============================//
        //  Results results = Runner.path("src/test/resources/bdd")
        //        .parallel(1);

        System.out.println("\n=================================================================");
        System.out.println("REPORTE RETO KARATE  GENERADO EN:");
        System.out.println(results.getReportDir() + "/karate-summary.html");
        System.out.println("=================================================================\n");

        // validacion si en caso se encuentre fallas en la suite.
        assertEquals(0, results.getFailCount(), "Se encontro escenarios de prueba fallidos en la suite.");
    }
}
